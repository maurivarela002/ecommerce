import { React } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

export const Item = ({ nombreProductos, fotoProductos, categoriaProductos }) => {
  return (
    <div className="col-4 containerCard">
        <Card className="cardBody" border="dark">
          <Link to={`/item/${categoriaProductos}`}>
            <Card.Body className="cardData">
              <h2>{nombreProductos}</h2>
              <img className="imgProducto" src={fotoProductos} />
            </Card.Body>
          </Link>
        </Card>
    </div>
  );
};
