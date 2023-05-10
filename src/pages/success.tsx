import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
  productImages: string[]
}

export default function Success({
  customerName,
  product,
  productImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efectuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efectuada!</h1>

        <ImagesContainer>
          {productImages.map((image, i) => (
            <ImageContainer key={i}>
              <Image src={image} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Obrigado <strong>{customerName}</strong>! A sua compra de
          <strong> {productImages.length} camisola(s)</strong> foi realizada com
          sucesso
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name

  const productImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productImages,
    },
  }
}
