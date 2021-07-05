import "./home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { React } from "react";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/itemDetailContainer";
import { NavBar } from "../src/componentes/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/logo.gif";

export const Home = () => {

  const navCarritoP = "Productos";
  const navCarritoI = "Items";

  return (
    <div className="homeNav">
    <NavBar logo={logo} productos={navCarritoP} Items={navCarritoI} />
    <Router>
      <Switch>
          <Route path="/">
          <ItemListContainer />
          </Route>
        </Switch>

        <Switch>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
        </Switch>

        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Home;