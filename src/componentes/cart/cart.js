import { React } from "react";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../context/cartContext";

export const Cart = () => {
	const { productos, removeItem, clear } = useCartContext();

	return (
		<div className="divCart">
			{productos.map((product) => (
				<div key={product.id}>
					<img
						className="imgProducto"
						src={product.fotoProductos}
					/>
					<h5 class="card-title">
						{product.nombreProductos} ({product.quantity})
					</h5>
					<p class="card-text">${product.precioProductos * product.quantity}</p>
					<button
						type="button"
						className="btn"
						class="btn btn-light"
						onClick={() => removeItem(product.id)}
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
