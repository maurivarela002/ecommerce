import { React, useState } from "react";
import "../item/itemCount.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Items = ({ inicial, stock }) => {
    const [contador, setContador] = useState(0);

    const handleClick = (i) => {
        const itemInicial = inicial;
        const limiteStock = stock;

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

        if (newResult < 0) {
            setContador(contador);
        }
    };

    return (
        <div>
            <button
                className="btn"
                onClick={() => handleClick("-")}
                type="button"
                class="btn btn-primary"
            >
                -
            </button>
            <button
                className="btn"
                type="button"
                class="btn btn-primary"
            >
                {contador}
            </button>
            <button
                className="btn"
                onClick={() => handleClick("+")}
                type="button"
                class="btn btn-primary"
            >
                +
            </button>
        </div>

    );
};
