import { React, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
    const [pokemon, setPokemon] = useState([]);

    const loadingFunction = async () => {
        return new Promise(async (resolve) => {
            setLoading(true);
            await setTimeout(() => {
                resolve(
                    setItem(<ItemList />)
                );
            }, 2000);
        });
    };

    useEffect(() => {
        loadingFunction();

        const getPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const pokemonArray = await response.json();
            setPokemon(pokemonArray.results);
            console.log(pokemonArray);
        }
        getPokemon();
    }, []
    );

    const valorInicialItem = 0;
    const stock = 5;

    return (
        <div>
            <div>
                <ItemCount inicial={valorInicialItem} stock={stock} />
            </div>
            <div className="divCard">
                <ItemList arrayPokemons={pokemon} />
            </div>
        </div>
    );
};
