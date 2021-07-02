import "./home.css";
import { React } from "react";
import { NavBar } from "../src/componentes/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";

export const Home = () => {

  const navCarrito = "Productos";

  return (
    <div className="homeNav">
      <NavBar logo={logo} productos={navCarrito} />
    </div>
  );
};
export default Home;