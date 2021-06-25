import { React, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemListDetails } from "../ItemList/ItemListDetails";

export const ItemListContainerDetails = () => {
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
    const desc = "Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. "
    return (
        <div>
            <div className="divCard">
                <ItemListDetails arrayPokemons={pokemon} descripcion={desc} />
            </div>
        </div>
    );
};
