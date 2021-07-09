import { React, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import DATA from "../../DATA/data.json"
import dataBasefb from "../../Firebase/firebaseConfig"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        const getProductos = () => {
            return id ? DATA.filter((productosItems) => productosItems.categoriaId === id) : DATA
        }

        const productosI = getProductos();
        setProductos(productosI)
    }, [id]);
    return (
        <div className="divCard">
            <ItemList productos={productos} />
        </div>
    );
};