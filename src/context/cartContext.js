import { createContext, useState, useContext } from 'react'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [productos, setProductos] = useState([])

	const isInCart = (id) => {
		return productos.some((product) => product.id === id)
	}

	const addItem = (item, quantity) => {
		console.log('addItem() exec', item, quantity)
		if (isInCart(item.id)) {
			console.log('isInCart')
			let productoIndex = productos.findIndex((product) => product.id === item.id)
			let newCart = [...productos]
			newCart[productoIndex].quantity = quantity
			setProductos(newCart)
		} else {
			console.log('else')
			setProductos([...productos, { ...item, quantity }])
		}
	}

	const removeItem = (id) => {
		setProductos(productos.filter((product) => product.id !== id))
	}

	const clear = () => {
		setProductos([])
	}

	return (
		<CartContext.Provider value={{ productos, addItem, removeItem, clear }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => {
	const context = useContext(CartContext)

	if (!context) throw new Error('useCartContext error')
	return context
}
