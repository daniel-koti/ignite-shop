import { useContext, useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  ProductImageWrapper,
  ProductItem,
  ProductList,
  ProductDetails,
  Title,
  ContentWrapper,
  ContentWrapperQuantity,
  ContentWrapperPrice,
} from './styles'

import { X } from 'phosphor-react'

import { CartContext } from '@/src/contexts/CartContext'
import { formatCurrency } from '@/src/utils/format'
import axios from 'axios'

interface CheckoutDialogProps {
  onCloseModal: () => void
}

export function CheckoutDialog({ onCloseModal }: CheckoutDialogProps) {
  const { products, removeProductOnCart, summary } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const quantity = products.length

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products,
      })

      const { checkoutUrl } = response.data
      onCloseModal()
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar para o checkout')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>

        <CloseButton onClick={onCloseModal}>
          <X size={24} />
        </CloseButton>

        <ContentWrapper>
          <ProductList>
            {quantity === 0 && <p>Sem items</p>}
            {products.map((product) => {
              return (
                <ProductItem key={product.id}>
                  <ProductImageWrapper>
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={101}
                      height={93}
                    />
                  </ProductImageWrapper>

                  <ProductDetails>
                    <span>{product.name}</span>
                    <strong>{product.price}</strong>

                    <button onClick={() => removeProductOnCart(product.id)}>
                      Remover
                    </button>
                  </ProductDetails>
                </ProductItem>
              )
            })}
          </ProductList>

          <footer>
            <ContentWrapperQuantity>
              <span>Quantidade</span>
              <span>{quantity} item(s)</span>
            </ContentWrapperQuantity>

            <ContentWrapperPrice>
              <span>Valor total</span>
              <strong>{formatCurrency(summary.total)}</strong>
            </ContentWrapperPrice>

            <button
              disabled={quantity === 0 || isCreatingCheckoutSession}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </button>
          </footer>
        </ContentWrapper>
      </Content>
    </Dialog.Portal>
  )
}
