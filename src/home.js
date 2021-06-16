import "./home.css";
import { React, useState } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif"; // Tell webpack this JS file uses this image

export const Home = () => {
  const [contador, setContador] = useState(0);

  const navInicio = "Fulbito";
  const navHome = "Home";

  const hanleClick = () => {
    setContador(contador + 1);
  };
  return (
    <div className="homeNav">
      <NavBar logo={logo} inicio={navInicio} home={navHome} />
      <div className="div">
        <h4 className="texto">Toca el botón para sumar 1</h4>
        <button
          className="btn"
          onClick={hanleClick}
          type="button"
          class="btn btn-primary"
        >
          {contador}
        </button>
      </div>
    </div>
  );
};
export default Home;
