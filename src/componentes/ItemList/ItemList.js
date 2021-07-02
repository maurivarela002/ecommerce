import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemList.css";
import { Item } from "../Item/Item";


export const ItemList = ({ arrayPokemons }) => {
    return (
        <div>
        {arrayPokemons.map((pokemonIndividual, i) => <Item nommbrePokemons={pokemonIndividual.name} id={i} />)}
        </div>
    );
};
