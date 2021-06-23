import { React, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);

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
    });

    const valorInicialItem = 0;
    const stock = 5;

    return (
        <div>
            <div>
                <ItemCount inicial={valorInicialItem} stock={stock} />
            </div>
            <div className="divCard">
                {item}
            </div>
        </div>
    );
};
