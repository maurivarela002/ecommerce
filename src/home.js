import "./home.css";
import { React } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import { ItemList } from "../src/componentes/ItemList/ItemList";
import { ItemListContainer } from "./componentes/itemCointainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";

export const Home = () => {

  const navInicio = "Fulbito";
  const navHome = "Home";

  return (
    <div className="homeNav">
      <NavBar logo={logo} inicio={navInicio} home={navHome} />
      <div className="div">
        <h4 className="texto">Toca el botón para sumar 1 o restar 1</h4>
        <ItemListContainer />
      </div>
      <div className="cards">
        <ItemList />
      </div>
    </div>
  );
};
export default Home;