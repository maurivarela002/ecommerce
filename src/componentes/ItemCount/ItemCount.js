import { React, useState, useContext } from "react";
import "./itemCount.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ItemCount = (initial, limit) => {
    const [contador, setContador] = useState(1);

    const onContador = (i) => {
        const itemInicial = initial
        const limiteStock = limit

        setContador(contador);
        let newResult = itemInicial;

        switch (i) {
            case "+":
                newResult = contador + 1;
                break;
            case "-":
                newResult = contador - 1;
                break;
            default:
                break;
        }
        setContador(newResult);

        if (newResult > limiteStock) {
            setContador(contador);
        }

        if (newResult < 1) {
            setContador(contador);
        }
    };
    return (
        <div className="containerItemCount">
            <div className="btn">
                <button onClick={() => onContador("+")} type="button" class="btn btn-dark">Add to Cart</button>
            </div>

            <div className="inputContador">
                {contador}
            </div>

            <div className="btn">
                <button onClick={() => onContador("-")} type="button" class="btn btn-dark">
                    Quit to Cart
                </button>
            </div>
            <div className="btn-comprar">
                <button type="button" class="btn btn-dark" onAdd={contador}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};
export default ItemCount