import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  images: string[]
}

export default function Success({ customerName, images }: SuccessProps){
  return(
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex"/>
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          {images.map(item => (
            <div key={item}>
              <Image src={item} width={120} height={110} alt=""/>
            </div>
          ))
          }
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {images.length} camisetas já está a caminho da sua casa. 
        </p>

        <Link href="/">
          Voltar ao catálago
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async({ query }) => {
  if(!query.session_id){
    return {
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  //const product = session.line_items.data[0].price.product as Stripe.Product //Um item
  const products = [...session.line_items.data].map(item => item.price.product) as Stripe.Product[] //Lista de itens
  const images = products.map(item => item.images[0])

  return {
    props: {
      customerName,
      images
    }
  }
}