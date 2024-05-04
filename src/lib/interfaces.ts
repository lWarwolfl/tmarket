export interface ProductInterface {
  createdAt: string
  name: string
  image: string
  description: string
  material: string
  price: string
  rate: string
  id: string
}

export interface CartItemInterface extends ProductInterface {
  size: 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
  color: 'purple' | 'green' | 'blue' | 'aqua' | 'white' | 'pink' | 'yellow' | 'red' | 'orange'
  quantity: number
}

export interface ReviewInterface {
  createdAt: string
  name: string
  avatar: string
  review: string
  rate: string
  id: string
  productId: string
}
