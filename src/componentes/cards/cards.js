import { React } from "react";
import "../cards/cards.css";
import { Card } from "react-bootstrap";

export const Cards = ({ img, title, info }) => {
    return (
        <Card border="primary">
            <Card.Img className="imgCard" src={img} />
            <Card.Body className="cardData">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{info}</Card.Text>
            </Card.Body>
        </Card>
    );
};
 