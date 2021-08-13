import { React } from "react";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../context/cartContext";

export const Cart = () => {
	const { productos, removeItem, clear } = useCartContext();

	return (
		<div className="divCart">
			{productos.map((obj) => (
				<div>
					<img
						className="imgProducto"
						src={obj.item.fotoProductos}
					/>
					<h5 class="card-title">
						{obj.item.nombreProductos}
					</h5>
					<p class="card-text">${obj.item.precioProductos}</p>
					<button
						type="button"
						className="btn"
						class="btn btn-light"
						onClick={() => removeItem(obj.item.id)}
					>
						Borrar Item
					</button>
				</div>
			))}
			<button
				type="button"
				className="btn"
				class="btn btn-light"
				onClick={() => clear()}
			>
				{" "}
				Limpiar carro
			</button>
		</div>
	);
};
