import React, { useEffect, useState } from 'react'

import { db } from './data/db'
import { Header, Guitar } from './components'
import { GuitarType, CartItemType } from './types'

function App(): React.JSX.Element {
  const [data, setData] = useState<GuitarType[]>([])
  const [cart, setCart] = useState<CartItemType[]>([])

  useEffect(() => {
    setData(db) // No seria necesario ya que es un archivo local, pero esta seria una manera correcta si la data viene desde una API
  }, [])

  function addToCart(item: CartItemType) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)

    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity!++

      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart(prevCart => [...prevCart, item])
    }
  }

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
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