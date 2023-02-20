import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'
import { Cart } from '../components/Cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        cartMode='checkout-session'
        currency='BRL'
        stripe={`${process.env.STRIPE_PUBLIC_KEY}`}
        shouldPersist={false}
      >
        <Header>
          <Image src={logoImg} alt="" />
          <Cart/>
        </Header>
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
