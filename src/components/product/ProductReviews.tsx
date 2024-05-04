import { ProductAddReviewForm } from '@/components/product/ProductAddReviewForm'
import { ProductReviewCard } from '@/components/product/ProductReviewCard'
import { type ReviewInterface } from '@/lib/apis/useGetReviews'

interface Props {
  items: ReviewInterface[]
  productId: ReviewInterface['productId']
}

export function ProductReviews({ items, productId }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <ProductAddReviewForm productId={productId} />

      {items.map((item, index) => (
        <ProductReviewCard key={index} {...item} />
      ))}
    </div>
  )
}
