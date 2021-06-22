import { React } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export const Item = ({ img, title, info }) => {
  return (
    <div class="container">
      <div className="card" class="row">
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
        <div class="col-3">
          <Card border="primary">
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
