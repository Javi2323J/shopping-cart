import { db } from '../data/db'
import { CartItemType, GuitarType } from '../types'

export type CartActions =
    { type: 'add-to-cart', payload: { item: GuitarType } } |
    { type: 'remove-from-cart', payload: { id: GuitarType['id'] } } |
    { type: 'decrease-quantity', payload: { item: GuitarType } } |
    { type: 'increase-quantity', payload: { item: GuitarType } } |
    { type: 'clear-cart' }

export type CartState = {
    data: GuitarType[]
    cart: CartItemType[]
}

export const initialState: CartState = {
    data: db,
    cart: []
}

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const cartReducer = (state: CartState, action: CartActions) => {
    if (action.type === 'add-to-cart') {
        const itemExists = state.cart.find(guitar => guitar.id === action.payload.item.id)

        let updatedCart: CartItemType[] = []

        if (itemExists) {
            updatedCart = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < MAX_ITEMS) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
        } else {
            const newItem: CartItemType = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {
        return {
            ...state
        }
    }

    if (action.type === 'decrease-quantity') {
        return {
            ...state
        }
    }

    if (action.type === 'increase-quantity') {
        return {
            ...state
        }
    }

    if (action.type === 'clear-cart') {
        return {
            ...state
        }
    }

    return state
}