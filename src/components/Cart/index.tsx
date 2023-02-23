import * as Dialog from '@radix-ui/react-dialog';
import { CardButton, Close, Content, Overlay } from './style';
import { X } from 'phosphor-react';
import Image from 'next/image'
import cart from '../../assets/cart.svg'
import { useShoppingCart } from 'use-shopping-cart';

export const Cart = () => {
  const {
    cartDetails,
    removeItem,
    cartCount,
    formattedTotalPrice
  } = useShoppingCart()

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
                  <button>Finalizar Compra</button>
                </footer>

              </section>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
  )
}