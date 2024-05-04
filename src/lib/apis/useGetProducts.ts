import axios from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

const Q_KEY = 'products'

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
  const { data: result } = await axios.post<ProductInterface>('/package/findAll')

  return result
}

export const useGetProducts = () => {
  return {
    query: useQuery({
      queryFn: () => getProducts(),
      queryKey: [Q_KEY],
    }),
  }
}
