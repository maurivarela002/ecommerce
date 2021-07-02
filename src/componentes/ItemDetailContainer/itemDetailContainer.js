import { React } from "react";
import "./itemDetailContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import img from "../../assets/pokemon.jpg"

export const ItemDetailContainer = () => {
  const foto = img
  return (
    <div className="containerDetail">
      <div className="row">
        <div className="col">
            <Card.Body className="cardData">
              <img className="imgCard" src={foto} ></img>
              <h4>Tipo</h4>
              <p>descripcion</p>
            </Card.Body>
        </div>
      </div>
    </div>
  );
};

