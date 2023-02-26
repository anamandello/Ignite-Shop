import { stripe } from "@/src/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import Stripe from "stripe"
import Head from "next/head";
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps{
  product: {
    id: string;
    name: string;
    imageUrl: string;
    priceFormatted: string;
    description: string;
    priceId: string;
    currency: string;
    price: number;
  }
}

export default function Product({ product }: ProductProps){
  //const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { addItem, cartDetails } = useShoppingCart()

  async function handleAddProductCart (){
    // try{
    //   setIsCreatingCheckoutSession(true)
    //   const response = await axios.post('/api/checkout', {
    //     priceId: product.price_id
    //   })

    //   const {checkoutUrl} = response.data

    //   window.location.href = checkoutUrl

    // }catch (err){
    //   //Conectar com uma ferramenta de observabilidade (Datalog/ Sentry)
    //   setIsCreatingCheckoutSession(false)
    //   alert('Falha ao redirecionar ao checkout')
    // }

    if(cartDetails[product.id]) return
    
    addItem({
      currency: 'BRL',
      id: product.id,
      name: product.name,
      price: product.price,
      price_id: product.priceId,
      image: product.imageUrl,
      priceFormatted: product.priceFormatted
    })
    
  }

  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>
          <button onClick={handleAddProductCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: 'prod_NMfDmlrw54M3db'}}
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async({ params }) =>{
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return{
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceFormatted: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount!/100),
        price: price.unit_amount,
        description: product.description,
        priceId: price.id,
        currency: price.currency
      }
    },
    revalidate: 60 * 60 * 1 //1hora
  }
}