import { React, useState } from "react";
import "./itemCount.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ItemCount = () => {
    const [contador, setContador] = useState(1);

    const handleClick = (i) => {
        const itemInicial = 1;
        const limiteStock = 5;
        

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
                <button onClick={() => handleClick("+")} type="button" class="btn btn-dark">Add to Cart</button>
            </div>
            
            <div className="inputContador">
                {contador}
            </div>

            <div className="btn">
                <button onClick={() => handleClick("-")} type="button" class="btn btn-dark">
                    Quit to Cart
                </button>
            </div>
        </div>
    );
};
export default ItemCount