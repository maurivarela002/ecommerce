import { createContext, useState, useContext } from 'react'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [productos, setProductos] = useState([])

	const isInCart = (id) => {
		return productos.some((obj) => obj.item.id === id)
	}

	const addItem = (item, quantity) => {
		debugger
		if (isInCart(item.id)) {
			let productoIndex = productos.findIndex((obj) => obj.item.id === item.id)
			let newCart = [...productos]
			newCart[productoIndex].quantity += quantity
			setProductos(newCart)
		} else setProductos([...productos, { item, quantity }])
	}

	const removeItem = (id) => {
		setProductos(productos.filter((obj) => obj.item.id !== id))
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
