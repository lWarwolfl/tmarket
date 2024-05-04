import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAddReview } from '@/lib/apis/useAddReview'
import { type ReviewInterface } from '@/lib/apis/useGetReviews'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icon } from '@iconify-icon/react'
import dayjs from 'dayjs'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  review: z.string({
    required_error: 'Please write your review',
  }),
  rate: z
    .number({
      required_error: 'Please enter a rating',
    })
    .min(1)
    .max(10),
})

export function ProductAddReviewForm({ productId }: { productId: ReviewInterface['productId'] }) {
  const addReviewHook = useAddReview()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addReviewHook.mutateAsync({
      rate: String(data.rate),
      review: data.review,
      productId,
      createdAt: dayjs().toISOString(),
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/742.jpg',
      name: 'Test User',
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter a number between 1-10"
                  {...field}
                  onChange={(e) =>
                    field.onChange(e.target.value === '' ? undefined : Number(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your review here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={addReviewHook.isPending}>
          Send review{' '}
          {addReviewHook.isPending ? (
            <Icon icon="line-md:loading-twotone-loop" className="align-middle text-2xl" />
          ) : null}
        </Button>
      </form>
    </Form>
  )
}
