import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import DATA from "../../DATA/data.json"


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [productosD, setproductosD] = useState([]);



  useEffect(() => {
    const getProductosDetail = () => {
      return id ? DATA.filter((productosItemsDetail) => productosItemsDetail.categoriaId === id) : DATA
    }

    const productosDetails = getProductosDetail();
    setproductosD(productosDetails)
  }, [id]);

  return (
    <div>
      {productosD.map((productosDetalle) => <ItemDetail nombreProductos={productosDetalle.Nombre} fotoProductos={productosDetalle.foto} precioProductos={productosDetalle.precio} id={productosDetalle.id} />)}
    </div>
  );
};