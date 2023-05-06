import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  HomeContainer,
  HomeWrapper,
  Product,
  ButtonContainer,
} from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe'

import 'keen-slider/keen-slider.min.css'

import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 3,
          spacing: 48,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 24,
    },
  })

  return (
    <HomeContainer>
      <HomeWrapper ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeWrapper>

      <ButtonContainer>
        <button onClick={() => instanceRef.current.prev()}>Anterior</button>
        <button onClick={() => instanceRef.current.next()}>Próximo</button>
      </ButtonContainer>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
