import { CartItem } from '@/components/layout/CartItem'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useStore } from '@/lib/store'
import { Icon } from '@iconify-icon/react'

export function Cart() {
  const { cart } = useStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant="outline" size="icon">
          <Icon icon="tabler:basket" className="absolute block text-xl" />
          <span className="sr-only">Cart</span>
          {cart.length > 0 ? (
            <Badge className="absolute -right-2.5 -top-2.5" variant="default">
              {(() => {
                let count = 0
                cart.forEach((item) => (count += item.quantity))
                return <>{count}</>
              })()}
            </Badge>
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      {cart.length > 0 ? (
        <DropdownMenuContent align="end">
          {cart.map((item, index) => (
            <DropdownMenuItem key={index} className="flex gap-2">
              <CartItem {...item} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      ) : null}
    </DropdownMenu>
  )
}
