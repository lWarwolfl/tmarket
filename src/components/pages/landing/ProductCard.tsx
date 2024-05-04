import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type ProductInterface } from '@/lib/apis/useGetProducts'
import { Icon } from '@iconify-icon/react'
import Image from 'next/image'

export function ProductCard(props: ProductInterface) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <Image
        src={props.image}
        alt={props.name}
        width={640}
        height={480}
        className="h-40 w-full object-cover"
        quality={80}
      />
      <CardHeader className="mb-auto">
        <CardTitle className="mb-0.5 truncate text-lg">{props.name}</CardTitle>
        <CardDescription className="line-clamp-3">{props.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon icon="tabler:star" className="text-xl text-primary" />
          {props.rate}
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="tabler:tag" className="text-xl text-primary" />${props.price}
        </div>
      </CardFooter>
    </Card>
  )
}
