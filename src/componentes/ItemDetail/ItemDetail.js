import { React, useState } from "react";
import "./ItemDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({foto,title,descripcion}) => {
    const [cart, setCart] = useState(<ItemCount />);

    const handleItemCount = () => {
        setCart(false)
        console.log(cart)
    }

  return (
    <div>
         <Card.Body className="cardData">
              <img className="imgCard" src={foto} ></img>
              <h4>{title}</h4>
              <p>{descripcion}</p>
              <ItemCount />
            </Card.Body>
    </div>
  );
};

