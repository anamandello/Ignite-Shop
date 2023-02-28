import { GetStaticProps } from "next";
import Image from "next/image";
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe";
import Link from "next/link";

import cart from '../assets/iconCart.svg'
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  priceFormatted: string;
  price: number;
  priceId: string;
  currency: string;
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  const handleAddProductCart = (product: ProductProps, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

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

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        
          {products.map(product => {
            return (
              <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                <Product className='keen-slider__slide'>
                  <Image src={product.imageUrl} width={520} height={480} alt="" priority/>

                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.priceFormatted}</span>
                    </div>
                    <button onClick={(e) => handleAddProductCart(product, e)}>
                      <Image src={cart} alt="Add in cart" width={32} height={32}/>
                    </button>
                  </footer>
                </Product>
              </Link>
            )
          })}
          
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceFormatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount!/100),
      price: price.unit_amount,
      priceId: price.id,
      currency: price.currency
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2
  }
}
