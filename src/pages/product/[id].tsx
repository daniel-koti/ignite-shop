import { useRouter } from 'next/router'

export default function ProductInfo() {
  const { query } = useRouter()

  return (
   <h1>Details Product {JSON.stringify(query)}</h1>
  )
}
