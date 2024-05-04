import { ProductAddReviewForm } from '@/components/pages/product/ProductAddReviewForm'
import { ProductReviewCard } from '@/components/pages/product/ProductReviewCard'
import { type ReviewInterface } from '@/lib/apis/useGetReviews'

interface Props {
  items: ReviewInterface[]
  productId: ReviewInterface['productId']
}

export function ProductReviews({ items, productId }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <ProductAddReviewForm productId={productId} />

      {items.map((item) => (
        <ProductReviewCard key={item.id} {...item} />
      ))}
    </div>
  )
}
