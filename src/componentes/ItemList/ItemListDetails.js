import { React } from "react";
import "./ItemList.css";
import { ItemDetailContainer } from "../itemDetails/itemDetailContainer";


export const ItemListDetails = ({arrayPokemons, descripcion}) => {
    return (
        <div className="container">
        {arrayPokemons.map((pokemonIndividual, i) => <ItemDetailContainer descripcion={descripcion} nommbrePokemons={pokemonIndividual.name} id={i} />)}
        </div>
    );
};
