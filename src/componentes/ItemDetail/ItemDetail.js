import { React, useState, useContext } from "react";
import "./ItemDetail.css";
import {
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from '../../context/cartContext'

export const ItemDetail = ({ nombreProductos, fotoProductos, precioProductos, idProdItem }) => {
  const [cart, setCart] = useState(<ItemCount />);
  const [contador, setContador] = useState(1);
  const { addItem, setProdcuto } = useCartContext();
  const [isClicked, setIsClicked] = useState(true);

  // const onAddContador = (quantity) => {
  //   setContador(quantity);
  //   setProdcuto(quantity);
  //   addItem(nombreProductos, fotoProductos, precioProductos, idProdItem, quantity)
  // }

  const itemInicial = 1;
  const limiteStock = 5;

  return (
    <div className="containerCard">
      <Card className="cardBody" border="dark">
        <Card.Body className="cardData">
          <h2>{nombreProductos}</h2>
          <p>${precioProductos}</p>
          <img className="imgProducto" src={fotoProductos} />
        </Card.Body>
        <div className="containerItemCount">
          <ItemCount initial={itemInicial} limit={limiteStock} />
          <Link className="btn" to='/Cart'>
            <button class="btn btn-dark">Terminar mi compra</button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

