import { Button } from '@/components/ui/button'
import { type CartItemInterface } from '@/lib/store'
import { Icon } from '@iconify-icon/react'

export function CartItem(props: Partial<CartItemInterface>) {
  function handleDelete(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation()
  }

  return (
    <>
      <Icon icon="tabler:box-model-2" className="text-xl text-[var(--blue-color)]" />
      <span className="max-w-40 truncate">Product Item - Size: M</span>
      <Button
        onClick={handleDelete}
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
