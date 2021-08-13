import { React, useState } from 'react'
import './itemCount.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ItemCount = ({ initial, limit, addItem }) => {
	const [contador, setContador] = useState(1)

	const onContador = (i) => {
		const itemInicial = initial
		const limiteStock = limit

		setContador(contador)
		let newResult = itemInicial

		switch (i) {
			case '+':
				newResult = contador + 1
				break
			case '-':
				newResult = contador - 1
				break
			default:
				break
		}
		setContador(newResult)

		if (newResult > limiteStock) {
			setContador(contador)
		}

		if (newResult < 1) {
			setContador(contador)
		}
	}
	return (
		<div className='containerItemCount'>
			<button
				className='btn'
				onClick={() => onContador('-')}
				type='button'
				class='btn btn-dark'
			>
				-
			</button>
			<div className='inputContador btn'>{contador}</div>

			<button
				className='btn'
				onClick={() => onContador('+')}
				type='button'
				class='btn btn-dark'
			>
				+
			</button>

			<div className='btn-comprar'>
				<button
					type='button'
					class='btn btn-dark'
					onClick={() => addItem(contador)}
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	)
}
export default ItemCount
