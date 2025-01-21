import { useEffect, useState, useMemo } from 'react'

import { db } from '../data/db'

import type { GuitarType, CartItemType, useCartReturnType } from '../types'

export function useCart(): useCartReturnType {
    const initialCart = (): CartItemType[] => {
        const localStorageCart = localStorage.getItem('cart')

        return localStorage.cart ? JSON.parse(localStorageCart!) : []
    }

    const [data, setData] = useState<GuitarType[]>([])
    const [cart, setCart] = useState<CartItemType[]>(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    useEffect(() => {
        if (data.length === 0)
            setData(db) // No seria necesario ya que es un archivo local, pero esta seria una manera correcta si la data viene desde una API

        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item: GuitarType) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)

        if (itemExists >= 0) {
            if (cart[itemExists].quantity! >= MAX_ITEMS) return

            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++

            setCart(updatedCart)
        } else {
            const newItem: CartItemType = { ...item, quantity: 1 }
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id: GuitarType['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function increaseQuantity(id: GuitarType['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity! < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity! + 1
                }
            }
            return item
        })

        setCart(updatedCart)
    }

    function decreaseQuantity(id: GuitarType['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity! > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity! - 1
                }
            }
            return item
        })

        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    //State Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity! * item.price), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}