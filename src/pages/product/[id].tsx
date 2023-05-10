import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { stripe } from '@/src/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

import Stripe from 'stripe'
import Image from 'next/image'
import axios from 'axios'
import { useContext, useState } from 'react'
import { CartContext, Product as IProduct } from '@/src/contexts/CartContext'
import { formatCurrency } from '@/src/utils/format'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addProductOnCart } = useContext(CartContext)
  const { isFallback } = useRouter()

  // fallback verifica se os dados do produto já foram carregados...

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={() => addProductOnCart(product)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // No path é o lugar onde criamos os Id que irá na build

    // Não teríamos como enviar o id de todos os produtos da página

    // Podemos passar dos produtos mais vendidos
    paths: [{ params: { id: 'prod_NHvSC2GKvKR0Zf' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatCurrency(price.unit_amount / 100),
        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
