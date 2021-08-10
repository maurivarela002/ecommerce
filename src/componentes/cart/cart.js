import { React } from 'react';
import { useCartContext } from '../../context/cartContext'

export const Cart = () => {

    const {producto, removeItem, clear} = useCartContext;

    return(
        <div>
            {producto.map((obj) => {
                <div>
                    <p>Nombre: {obj.item.nombreProductos}</p>
                    <p>Foto: {obj.item.fotoProductos}</p>
                    <p>Precio: {obj.item.precioProductos}</p>

                    <button onClick={() => removeItem(obj.item.id)}>Borrar Item</button>
                </div>
            })}
            <button onClick={() => clear()}> Limpiar carro</button>
        </div>
    )
}