import { CartItemType } from './CartItemType'
import { GuitarType } from './GuitarType'

export type useCartReturnType = {
    data: GuitarType[]
    cart: CartItemType[],
    addToCart: (item: CartItemType) => void
    removeFromCart: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number
}