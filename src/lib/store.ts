import { type ProductInterface } from '@/lib/apis/useGetProducts'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItemInterface extends ProductInterface {
  size: 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
  color: 'purple' | 'green' | 'blue' | 'aqua' | 'white' | 'pink' | 'yellow' | 'red' | 'orange'
  quantity: number
}

interface StoreState {
  cart: CartItemInterface[]
  addItemToCart: (item: CartItemInterface) => void
  deleteItemFromCart: (id: CartItemInterface['id']) => void
}

export const useStore = create(
  persist<StoreState>(
    (set) => ({
      cart: [],
      addItemToCart: (item: CartItemInterface) =>
        set((state) => {
          const exists = state.cart.find((cartItem) => cartItem.id === item.id)
          if (exists) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            }
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] }
          }
        }),
      deleteItemFromCart: (id: CartItemInterface['id']) =>
        set((state) => {
          return {
            cart: state.cart.filter((cartItem) => cartItem.id !== id),
          }
        }),
    }),
    {
      name: 'tmarket',
    }
  )
)
