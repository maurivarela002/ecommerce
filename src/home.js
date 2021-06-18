import "./home.css";
import { React, useState } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import { Cards } from "../src/componentes/cards/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";
import imgCard from "../src/assets/guantes.jpg";

export const Home = () => {
  const [contador, setContador] = useState(0);
  const [sumar, setSumar] = useState("");
  const [restar, setRestar] = useState("");

  const navInicio = "Fulbito";
  const navHome = "Home";

  const titleCard = "Guantes de Portero";
  const infoCard = "Guantes De Golero De Fútbol Para Niño Niña";

  const hanleClick = () => {
    setContador(contador);
  };

  const swichtClick = (i) => {
    let newResult;
    switch (i) {
      case "+":
        newResult = Number(sumar) + 1;
        break;
      case "-":
        newResult = Number(restar) - 1;
        break;
      default:
        break;
    }
    setContador(newResult);
  };
  return (
    <div className="homeNav">
      <NavBar logo={logo} inicio={navInicio} home={navHome} />
      <div className="div">
        <h4 className="texto">Toca el botón para sumar 1 o restar 1</h4>
        <div>
          <button
            className="btn"
            onClick={hanleClick}
            type="button"
            class="btn btn-primary"
          >
            {contador}
          </button>
        </div>

        <div>
          <button
            className="btn"
            onClick={() => swichtClick("+")}
            type="button"
            class="btn btn-primary"
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => swichtClick("-")}
            type="button"
            class="btn btn-primary"
          >
            -
          </button>
        </div>
      </div>
      <div className="cards">
        <Cards img={imgCard} title={titleCard} info={infoCard} />
      </div>
    </div>
  );
};
export default Home;
