import { React } from "react";
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const valorInicialItem = 0;
    const stock = 5;
    return (
        <div>
            <div>
            <ItemCount inicial={valorInicialItem} stock={stock} />
            </div>
            <div className="divCard" class="container">
                <ItemList />
            </div>
        </div>
        

    );
};
