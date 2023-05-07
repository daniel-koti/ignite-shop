import React, { createContext, useState } from 'react'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface CartContextProps {
  products: Product[]
  addProductOnCart: (product: Product) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  function addProductOnCart(product: Product) {
    const productAlreadyOnCart = products.find((item) => item.id === product.id)

    if (productAlreadyOnCart) {
      return null
    }

    setProducts((state) => [...state, product])
  }

  return (
    <CartContext.Provider value={{ products, addProductOnCart }}>
      {children}
    </CartContext.Provider>
  )
}
