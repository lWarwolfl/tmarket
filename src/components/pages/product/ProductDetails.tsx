import { ProductAddToCartForm } from '@/components/pages/product/ProductAddToCartForm'
import { type ProductInterface } from '@/lib/apis/useGetProducts'

export function ProductDetails(props: ProductInterface) {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={`https://api.dicebear.com/9.x/shapes/svg?seed=${props.name}`}
        alt={props.name}
        width={640}
        height={480}
        className="h-40 w-full object-cover"
      />

      <div className="flex flex-col gap-2 text-lg">
        <div className="flex items-center justify-between">
          {props.name} <span className="text-primary">${props.price}</span>
        </div>
        <div className="text-sm text-muted-foreground">{props.description}</div>
      </div>

      <ProductAddToCartForm {...props} />
    </div>
  )
}
