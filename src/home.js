import "./home.css";
import { React } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import { ItemListContainer } from "../src/componentes/itemCointainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";

export const Home = () => {

  const navCarrito = "Carrito";

  return (
    <div className="homeNav">
      <NavBar logo={logo} carro={navCarrito} />
      <div>
      <ItemListContainer />
      </div>
    </div>
  );
};
export default Home;