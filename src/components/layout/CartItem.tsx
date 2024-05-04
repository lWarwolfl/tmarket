import { Button } from '@/components/ui/button'
import { useStore, type CartItemInterface } from '@/lib/store'
import { Icon } from '@iconify-icon/react'

export function CartItem(props: CartItemInterface) {
  const { deleteItemFromCart } = useStore()

  function handleDelete(e: React.MouseEvent<HTMLElement>, id: string) {
    e.stopPropagation()
    deleteItemFromCart(id)
  }

  return (
    <>
      <span className="max-w-40 truncate">
        {props.color} - {props.size} - {props.quantity} x {props.name}
      </span>
      <Button
        onClick={(e) => handleDelete(e, props.id)}
        className="ml-4 h-8 w-8 text-destructive hover:text-red-600"
        variant="outline"
        size="icon"
      >
        <Icon icon="tabler:trash" className="absolute block text-xl" />
        <span className="sr-only">Delete</span>
      </Button>
    </>
  )
}
