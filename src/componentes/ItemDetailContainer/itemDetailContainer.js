import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { dataBasefb } from "../../Firebase/firebaseConfig"


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [productosD, setproductosD] = useState([]);



  useEffect(() => {
    const getProductos = () => {
        const itemCollection = dataBasefb.collection("Productos");
        console.log(itemCollection)
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No se encontraron Productos de Fulbito");
            }
            const todosProductos = querySnapshot.docs.map(doc => doc.data())
            console.log(todosProductos)
            setproductosD(todosProductos);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
        })
    }

    getProductos();
}, [id]);

  return (
    <div>
     {productosD.map((productosIndividual) => id === productosIndividual.id ? <ItemDetail precioProductos={productosIndividual.precio} nombreProductos={productosIndividual.Nombre} fotoProductos={productosIndividual.foto} idProdItem={productosIndividual.id} /> : <div />)}
    </div>
  );
};