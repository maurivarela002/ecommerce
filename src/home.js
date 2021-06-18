import "./home.css";
import { React } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import { Cards } from "../src/componentes/cards/cards";
import { ItemListContainer } from "./componentes/itemCointainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";
import imgCard from "../src/assets/guantes.jpg";

export const Home = () => {

  const navInicio = "Fulbito";
  const navHome = "Home";

  const titleCard = "Guantes de Portero";
  const infoCard = "Guantes De Golero De Fútbol Para Niño Niña";


  return (
    <div className="homeNav">
      <NavBar logo={logo} inicio={navInicio} home={navHome} />
      <div className="div">
        <h4 className="texto">Toca el botón para sumar 1 o restar 1</h4>
        <ItemListContainer />
      </div>
      <div className="cards">
        <Cards img={imgCard} title={titleCard} info={infoCard} />
      </div>
    </div>
  );
};
export default Home;