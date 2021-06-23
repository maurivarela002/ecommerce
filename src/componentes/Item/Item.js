import { React } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export const Item = ({ img, title, info }) => {
  return (
    <div className="container">
      <div className="card" className="row">
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div className="col-3">
          <Card border="dark">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
      </div>
    </div>
  );
};
