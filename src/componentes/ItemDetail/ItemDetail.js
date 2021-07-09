import { React, useState } from "react";
import "./ItemDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({ nombreProductos, fotoProductos, precioProductos }) => {
  const [cart, setCart] = useState(<ItemCount />);

  const handleItemCount = () => {
    setCart(false)
    console.log(cart)
  }

  return (
    <div className="containerCard">
    <Card className="cardBody" border="dark">
      <Card.Body className="cardData">
        <h2>{nombreProductos}</h2>
        <p>{precioProductos}</p>
        <img className="imgProducto" src={fotoProductos} />
      </Card.Body>
      <div className="ItemCount">
      <ItemCount />
      </div>
    </Card>
      </div>
  );
};

