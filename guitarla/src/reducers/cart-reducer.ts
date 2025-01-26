import { GuitarType } from '../types'

export type CartActions =
    { type: 'add-to-cart', payload: { item: GuitarType } } |
    { type: 'remove-from-cart', payload: { id: GuitarType['id'] } } |
    { type: 'decrease-quantity', payload: { item: GuitarType } } |
    { type: 'increase-quantity', payload: { item: GuitarType } } |
    { type: 'clear-cart' }