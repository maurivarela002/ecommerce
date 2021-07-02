import { React } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemDetailContainer } from "../ItemDetailContainer/itemDetailContainer"

export const Item = ({ nommbrePokemons }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Card className="cardBody" border="dark">
            <Card.Body className="cardData">
              <h2>{nommbrePokemons}</h2>
            </Card.Body>
            <ItemDetailContainer />
            <div className="count">
            <ItemCount />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
