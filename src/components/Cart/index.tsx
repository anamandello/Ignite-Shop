import * as Dialog from '@radix-ui/react-dialog';
import { CardButton, Close, Content, Overlay } from './style';
import { X } from 'phosphor-react';
import camiseta1 from '../../assets/Shirt/1.png';
import Image from 'next/image'
import cart from '../../assets/cart.svg'

export const Cart = () => {
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
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                
                <div>
                  <Image src={camiseta1} alt=""/>
                  <div>
                    <h3>Camiseta X</h3>
                    <span>R$ 59,90</span>
                    <a>Remover</a>
                  </div>
                </div>
                <footer>
                  <div><span>Quantidade</span><span>3 itens</span></div>
                  <div><span>Valor total</span><span>R$ 79,90</span></div>
                  <button>Finalizar Compra</button>
                </footer>

              </section>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
  )
}