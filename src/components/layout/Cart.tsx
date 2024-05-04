import { CartItem } from '@/components/layout/CartItem'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify-icon/react'

export function Cart() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant="outline" size="icon">
          <Icon icon="tabler:basket" className="absolute block text-xl" />
          <span className="sr-only">Cart</span>
          <Badge className="absolute -right-2.5 -top-2.5" variant="default">
            1
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex gap-2">
          <CartItem />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
