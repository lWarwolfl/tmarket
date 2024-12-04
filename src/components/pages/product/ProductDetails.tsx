import { ProductAddToCartForm } from '@/components/pages/product/ProductAddToCartForm'
import { type ProductInterface } from '@/lib/apis/useGetProducts'
import Image from 'next/image'

export function ProductDetails(props: ProductInterface) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        priority={true}
        src={`https://api.dicebear.com/9.x/shapes/svg?seed=${Math.random()}`}
        alt={props.name}
        width={640}
        height={480}
        className="h-40 w-full object-cover"
        quality={80}
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
