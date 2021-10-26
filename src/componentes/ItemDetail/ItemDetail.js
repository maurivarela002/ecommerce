import { React } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/cartContext'

export const ItemDetail = ({
	nombreProductos,
	fotoProductos,
	precioProductos,
	idProdItem,
}) => {
	const { addItem } = useCartContext()

	const handleItem = (quantity) => {
		const producto = {
			nombreProductos,
			fotoProductos,
			precioProductos,
			id: idProdItem
		}

		addItem(producto, quantity)
	}

	const itemInicial = 1
	const limiteStock = 5

	return (
		<div className='containerCard'>
			<Card className='cardBody' border='dark'>
				<Card.Body className='cardData'>
					<h2>{nombreProductos}</h2>
					<p>${precioProductos}</p>
					<img className='imgProducto' src={fotoProductos} />
				</Card.Body>
				<div className='containerItemCount'>
					<ItemCount
						initial={itemInicial}
						limit={limiteStock}
						addItem={handleItem}
					/>
					<Link className='btn' to='/Cart'>
						<button class='btn btn-dark'>Terminar mi compra</button>
					</Link>
				</div>
			</Card>
		</div>
	)
}
