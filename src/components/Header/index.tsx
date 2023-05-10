import { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as Dialog from '@radix-ui/react-dialog'

import { CartButton, HeaderContainer } from './styles'

import { Handbag } from 'phosphor-react'

import { CartContext } from '@/src/contexts/CartContext'

import logoImg from '../../assets/logo.svg'
import { CheckoutDialog } from '../CheckoutDialog'

export function Header() {
  const { products } = useContext(CartContext)
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false)

  const quantity = products.length

  function handleToggleModal() {
    setIsCheckoutDialogOpen(!isCheckoutDialogOpen)
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root open={isCheckoutDialogOpen}>
        <Dialog.Trigger asChild>
          <CartButton onClick={handleToggleModal}>
            <Handbag size={24} />
            {quantity > 0 && <span>{quantity}</span>}
          </CartButton>
        </Dialog.Trigger>

        <CheckoutDialog onCloseModal={handleToggleModal} />
      </Dialog.Root>
    </HeaderContainer>
  )
}
