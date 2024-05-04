import axios from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export const Reviews_KEY = 'reviews'

export interface ReviewInterface {
  createdAt: string
  name: string
  avatar: string
  review: string
  rate: string
  id: string
  productId: string
}

export const getReviews = async (productId: string) => {
  const { data } = await axios.get<ReviewInterface[]>('/Reviews/' + productId + 'reviews')

  return data
}

export const useGetReviews = (productId: string) => {
  return {
    query: useQuery({
      queryFn: () => getReviews(productId),
      queryKey: [Reviews_KEY, productId],
    }),
  }
}
