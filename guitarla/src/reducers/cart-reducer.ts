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

export const cartReducer = (state: CartState, action: CartActions) => {
    if (action.type === 'add-to-cart') {
        return {
            ...state
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