import { React } from "react";
import { Items } from "../item/ItemCount";

export const ItemListContainer = () => {
    const valorInicialItem = 0;
    const stock = 5;
    return (
        <Items inicial={valorInicialItem} stock={stock}/>
    );
};
 