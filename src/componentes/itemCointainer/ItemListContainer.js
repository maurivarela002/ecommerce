import { React } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = () => {
    const valorInicialItem = 0;
    const stock = 5;
    return (
        <ItemCount inicial={valorInicialItem} stock={stock}/>
    );
};
 