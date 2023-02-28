import * as Dialog from '@radix-ui/react-dialog';
import { CartButton, Close, Content, Overlay } from './style';
import { X } from 'phosphor-react';
import Image from 'next/image'
import cart from '../../assets/cart.svg'
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
import axios from 'axios';

export const Cart = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const {
    cartDetails,
    removeItem,
    cartCount,
    formattedTotalPrice,
    clearCart
  } = useShoppingCart()

  const handleBuyItems = async () => {
    setIsCreatingCheckoutSession(true)
    const cartItems = []
    Object.keys(cartDetails).map(item => {
      const { price_id } = cartDetails[item]
      cartItems.push({price: price_id, quantity: 1})
    })

    try{
      const response = await axios.post('/api/checkout', {
        listPrice: cartItems
      })

      const {checkoutUrl} = response.data

      window.location.href = checkoutUrl

    }catch (err){
      //Conectar com uma ferramenta de observabilidade (Datadog/ Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }finally{
      clearCart()
    }
  }

  return(
    <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              <div>
                <Image src={cart} alt='Button cart'/>
                <div><span>{cartCount}</span></div>
              </div>
            </CartButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Overlay/>
            <Content>
              <Dialog.Title>Sacola de compras</Dialog.Title>
              <Close>
                <X size={24} />
              </Close>
              <section>
              {Object.keys(cartDetails).map(item => {
                const { name, image, id, priceFormatted } = cartDetails[item]
                
                return(
                  <div key={id}>
                    <Image src={image} alt="" width={100} height={93}/>
                    <div>
                      <h3>{name}</h3>
                      <span>{priceFormatted}</span>
                      <a onClick={() => removeItem(id)}>Remover</a>
                    </div>
                  </div>
                )
              })}
                
                <footer>
                  <div><span>Quantidade</span><span>{cartCount} items</span></div>
                  <div><span>Valor total</span><span>{formattedTotalPrice}</span></div>
                  <button onClick={handleBuyItems} disabled={isCreatingCheckoutSession}>Finalizar Compra</button>
                </footer>

              </section>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
  )
}