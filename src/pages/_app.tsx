import Image from 'next/image'
import Link from 'next/link'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

import { CartContext, CartContextProvider } from '../contexts/CartContext'
import { useContext } from 'react'
import { Header } from '../components/Header'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <CartContextProvider>
        <Header />

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
