import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetailContainer = ({ nommbrePokemons, descripcion }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card className="cardBody" border="dark">
            <Card.Body className="cardData">
              <h2>{nommbrePokemons}</h2>
              <p>{descripcion}</p>
            </Card.Body>
            <div className="count">
            <ItemCount />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

