import { React, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const pokemonArray = await response.json();
            setPokemon(pokemonArray.results);
            console.log(pokemonArray);
        }
        getPokemon();
    }, []
    );
    return (
        <div>
            <div className="divCard">
                <ItemList arrayPokemons={pokemon} />
            </div>
        </div>
    );
};
