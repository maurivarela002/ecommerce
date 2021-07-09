import "./home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { React } from "react";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/itemDetailContainer";
import { NavBar } from "../src/componentes/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";

export const Home = () => {
  const navCarrito1 = "Guantes";
  const navCarrito2 = "Botines";
  const navCarrito3 = "Camisetas";


  return (
    <div className="homeNav">
      <NavBar logo={logo} Guantes={navCarrito1} Botines={navCarrito2} Camisetas={navCarrito3} />
      <Router>
        <Switch>
          <Route path="/">
            <ItemListContainer />
          </Route>

          <Route exact path='/category/:id'>
            <ItemListContainer />
          </Route>

          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Home;