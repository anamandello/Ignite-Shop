import * as Dialog from '@radix-ui/react-dialog';
import { CardButton, Close, Content, Overlay } from './style';
import { X } from 'phosphor-react';
import Image from 'next/image'
import cart from '../../assets/cart.svg'
import { useShoppingCart } from 'use-shopping-cart';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Cart = () => {
  //const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const [itemsCart, setItemsCart] = useState([])

  const {
    cartDetails,
    removeItem,
    cartCount,
    formattedTotalPrice
  } = useShoppingCart()

  const attCart = () => {
    setItemsCart([])
    Object.keys(cartDetails).map(item => {
      const { price_id } = cartDetails[item]
      setItemsCart([...itemsCart, {price: price_id, quantity: 1}])
    })
  }

  useEffect(() => {
    
    attCart()
  }, [cartDetails])

  const handleBuyItems = async () => {
    try{
      await attCart()

      console.log(itemsCart)
      //  const response = await axios.post('/api/checkout', {
      //    listPrice: itemsCart,
      //  })

      //  const {checkoutUrl} = response.data

       setItemsCart([])

      //  window.location.href = checkoutUrl

    }catch (err){
      //Conectar com uma ferramenta de observabilidade (Datalog/ Sentry)
      //setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return(
    <Dialog.Root>
          <Dialog.Trigger asChild>
            <CardButton>
              <div>
                <Image src={cart} alt='Button cart'/>
              </div>
            </CardButton>
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
                  <button onClick={handleBuyItems}>Finalizar Compra</button>
                </footer>

              </section>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
  )
}