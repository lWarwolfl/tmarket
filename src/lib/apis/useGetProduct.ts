import { type ProductInterface } from '@/lib/apis/useGetProducts'
import axios from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export const PRODUCTS_KEY = 'products'

export const getProduct = async (id: string) => {
  const { data } = await axios.get<ProductInterface>('/products/' + id)

  return data
}

export const useGetProduct = (id: string) => {
  return {
    query: useQuery({
      queryFn: () => getProduct(id),
      queryKey: [PRODUCTS_KEY],
    }),
  }
}
