import axios from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export const PRODUCTS_KEY = 'products'

export interface ProductInterface {
  createdAt: string
  name: string
  image: string
  description: string
  material: string
  price: string
  rate: string
  id: string
}

export const getProducts = async () => {
  const { data } = await axios.get<ProductInterface[]>('/products')

  return data
}

export const useGetProducts = () => {
  return {
    query: useQuery({
      queryFn: () => getProducts(),
      queryKey: [PRODUCTS_KEY],
    }),
  }
}
