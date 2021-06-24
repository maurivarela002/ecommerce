import { React } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export const Item = ({nommbrePokemons, id}) => {

  return (
    <div className="container" >
      <div className="card" className="row">
        <div className="col">
          <Card border="dark">
            <Card.Body className="cardData">
              <h2>{nommbrePokemons}</h2>
            </Card.Body>
          </Card>{" "}
        </div>
      </div>
    </div>
  );
};
