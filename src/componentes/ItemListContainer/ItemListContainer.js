import { React, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { dataBasefb } from "../../Firebase/firebaseConfig"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    console.log("id navbar",id);


    useEffect(() => {
        const getProductos = () => {
            setLoading(true);
            const itemCollection = dataBasefb.collection("Productos");
            console.log(itemCollection)
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No se encontraron Productos de Fulbito");
                }
                const todosProductos = querySnapshot.docs.map(doc => doc.data())
                console.log(todosProductos)
                setProductos(todosProductos);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(true);
            })
        }

        getProductos();
        // setProductos(productosI)
    }, [id]);
    return (
        <div className="divCard">
            <ItemList productos={productos} id={id} />
        </div>
    );
};