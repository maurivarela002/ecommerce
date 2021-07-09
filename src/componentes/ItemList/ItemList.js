import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemList.css";
import { Item } from "../Item/Item";


export const ItemList = ({ productos }) => {
    return (
        <div>
        {productos.map((productosIndividual) => <Item nombreProductos={productosIndividual.Nombre} fotoProductos={productosIndividual.foto} categoriaProductos={productosIndividual.categoriaId} id={productosIndividual.id} />)}
        </div>
    );
};
