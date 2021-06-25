import "./home.css";
import { React } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";

export const Home = () => {

  const navHome = "Home";
  const navCarrito = "Carrito";

  return (
    <div className="homeNav">
      <NavBar logo={logo} home={navHome} carro={navCarrito} />
    </div>
  );
};
export default Home;