import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemList.css";
import { Item } from "../Item/Item";


export const ItemList = ({ productos, id }) => {
    console.log(productos)
    return (
        <div>
        {productos.map((productosIndividual) => !id || id === productosIndividual.categoriaId ? <Item categoriaProductos={productosIndividual.categoriaId} idProdItem={productosIndividual.id} nombreProductos={productosIndividual.Nombre} fotoProductos={productosIndividual.foto} /> : <div />)}
        </div>
    );
};
