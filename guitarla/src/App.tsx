import React, { useEffect, useState } from 'react'

import { db } from './data/db'
import { Header, Guitar } from './components'
import { GuitarType, CartItemType } from './types'

function App(): React.JSX.Element {
  const initialCart = () => {
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

  function addToCart(item: CartItemType) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)

    if (itemExists >= 0) {
      if (cart[itemExists].quantity! >= MAX_ITEMS) return

      const updatedCart = [...cart]
      updatedCart[itemExists].quantity!++

      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart(prevCart => [...prevCart, item])
    }
  }

  function removeFromCart(id: number) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id: number) {
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

  function decreaseQuantity(id: number) {
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

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App