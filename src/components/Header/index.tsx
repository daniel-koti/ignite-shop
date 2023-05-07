import Link from 'next/link'
import Image from 'next/image'

import { CartButton, HeaderContainer } from './styles'

import { Handbag } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '@/src/contexts/CartContext'

export function Header() {
  const { products } = useContext(CartContext)

  const quantity = products.length

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton>
        <Handbag size={24} />

        {quantity > 0 && <span>{quantity}</span>}
      </CartButton>
    </HeaderContainer>
  )
}
