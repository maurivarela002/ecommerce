import { React } from "react";
import "./itemDetailContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export const ItemDetailContainer = ({nommbrePokemons, id, detailDesc}) => {
    return (
        <div className="container">
            <Card border="dark">
            <Card.Body className="cardData">
              <h2>{nommbrePokemons}</h2>
              <p>{detailDesc}</p>
            </Card.Body>
          </Card>{" "}
        </div>
    );
};
