import Image from 'next/image'
import Link from 'next/link'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.svg'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
