import { PRODUCTS_KEY, type ProductInterface } from '@/lib/apis/useGetProducts'
import axios from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export const getProduct = async (id: ProductInterface['id']) => {
  const { data } = await axios.get<ProductInterface>('/products/' + id)

  return data
}

export const useGetProduct = (id: ProductInterface['id']) => {
  return {
    query: useQuery({
      queryFn: () => getProduct(id),
      queryKey: [PRODUCTS_KEY],
    }),
  }
}
