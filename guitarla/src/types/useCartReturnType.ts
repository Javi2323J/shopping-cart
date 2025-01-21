import { CartItemType } from './CartItemType'
import { GuitarType } from './GuitarType'

export type useCartReturnType = { // no es necesario
    data: GuitarType[]
    cart: CartItemType[],
    addToCart: (item: GuitarType) => void
    removeFromCart: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number
}