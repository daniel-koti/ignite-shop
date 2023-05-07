import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {
  HomeContainer,
  HomeWrapper,
  ProductWrapper,
  Product,
  ButtonSliderRight,
  ButtonSliderLeft,
} from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe'

import 'keen-slider/keen-slider.min.css'

import Stripe from 'stripe'
import { CaretRight, Handbag } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { addProductOnCart } = useContext(CartContext)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
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

  function handleButtonSlide(type: 'prev' | 'next') {
    if (type === 'prev') {
      instanceRef.current.prev()
      setCurrentSlide((state) => state - 1)
    } else {
      instanceRef.current.next()
      setCurrentSlide((state) => state + 1)
    }
  }

  return (
    <>
      <HomeContainer>
        <HomeWrapper ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <ProductWrapper key={product.id} className="keen-slider__slide">
              <Product href={`product/${product.id}`}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Product>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button onClick={() => addProductOnCart(product)}>
                  <Handbag size={32} weight="bold" />
                </button>
              </footer>
            </ProductWrapper>
          ))}

          {currentSlide !== 0 && (
            <ButtonSliderLeft onClick={() => handleButtonSlide('prev')}>
              <CaretRight size={32} />
            </ButtonSliderLeft>
          )}

          {currentSlide !==
            instanceRef.current?.track?.details?.slides.length - 3 && (
            <ButtonSliderRight onClick={() => handleButtonSlide('next')}>
              <CaretRight size={32} />
            </ButtonSliderRight>
          )}
        </HomeWrapper>
      </HomeContainer>
    </>
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
