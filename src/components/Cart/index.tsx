import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay } from './style';
import { X } from 'phosphor-react';
import camiseta1 from '../../assets/Shirt/1.png';
import Image from 'next/image'

export const Cart = () => {
  return(
    <Dialog.Root>
          <Dialog.Trigger>
            Nova transação
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
              </section>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
  )
}