import React, { createContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  imageUrl: string
  description: string
  price: string
  numberPrice: number
  defaultPriceId: string
}

interface CartContextProps {
  products: Product[]
  summary: { total: number }
  addProductOnCart: (product: Product) => void
  removeProductOnCart: (productId: string) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  const summary = products.reduce(
    (acc, product) => {
      acc.total += product.numberPrice
      return acc
    },
    {
      total: 0,
    },
  )

  function addProductOnCart(product: Product) {
    const productAlreadyOnCart = products.find((item) => item.id === product.id)

    if (productAlreadyOnCart) {
      return null
    }

    setProducts((state) => [...state, product])
  }

  function removeProductOnCart(productId: string) {
    const newProducts = products.filter((product) => product.id !== productId)
    setProducts(newProducts)
  }

  return (
    <CartContext.Provider
      value={{ products, addProductOnCart, removeProductOnCart, summary }}
    >
      {children}
    </CartContext.Provider>
  )
}
