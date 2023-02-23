import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'
import { Cart } from '../components/Cart'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      currency="BRL"
      stripe={`${process.env.STRIPE_PUBLIC_KEY}`}
      shouldPersist
    >
      <Container>
          <Header>
            <Link href={'/'}>
              <Image src={logoImg} alt="" />
            </Link>
            <Cart/>
          </Header>
          <Component {...pageProps} />
      </Container>
    </CartProvider>
    
  )
}
