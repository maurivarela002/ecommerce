import { React } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

export const Item = ({ nombreProductos, fotoProductos, idProdItem }) => {
  return (
    <div className="col-6 containerCard">
        <Card className="" border="dark">
          <Link to={`/item/${idProdItem}`}>
            <Card.Body className="cardData">
              <h2>{nombreProductos}</h2>
              <img className="imgProducto" src={fotoProductos} />
            </Card.Body>
          </Link>
        </Card>
    </div>
  );
};
