import { React } from "react";
import "./ItemList.css";
import { Item } from "../Item/Item";
import imgCard from "../../../src/assets/guantes.jpg";


export const ItemList = () => {
    const titleCard = "Guantes de Portero";
    const infoCard = "Guantes De Golero De Fútbol Para Niño Niña";

    return (
       <div>
           <Item img={imgCard} title={titleCard} info={infoCard} />
       </div>
    );
};
 