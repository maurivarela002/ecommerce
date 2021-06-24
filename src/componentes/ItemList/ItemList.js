import { React } from "react";
import "./ItemList.css";
import { Item } from "../Item/Item";


export const ItemList = ({arrayPokemons}) => {
    console.log(arrayPokemons)
    return (
        <div className="container">
        {arrayPokemons.map((pokemonIndividual, i) => <Item nommbrePokemons={pokemonIndividual.name} id={i} />)}
        </div>
    );
};
