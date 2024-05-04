import { REVIEWS_KEY, type ReviewInterface } from '@/lib/apis/useGetReviews'
import axios from '@/lib/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const addReview = async (body: ReviewInterface) => {
  const { data } = await axios.post('/products/' + body.productId + '/reviews', body)

  return data
}

export const useAddReview = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [REVIEWS_KEY] })
      toast.success('Your review was submitted successfully.')
    },
  })
}
