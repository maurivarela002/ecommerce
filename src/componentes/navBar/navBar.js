import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../navBar/navBar.css'
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import fotoCart from "../../assets/carrito.png";
import { Navbar } from 'react-bootstrap';

export const NavBar = ({ logo, productos }) => {
  return (
    <div className="navbar-header">
    <Router>
        <Navbar variant="dark" bg="dark">
          <Link to="/">
            <img className="img" src={logo} alt="Logo" />
          </Link>
          <Navbar.Brand >
            <Link className="productos" to="/productos">{productos}</Link>
          </Navbar.Brand>
          <div className="ml-auto">
          <img className="cartImg" src={fotoCart} alt="fotoCart" />
          </div>
        </Navbar>
        <Switch>
          <Route path="/">
          <ItemListContainer />
          </Route>
        </Switch>

        <Switch>
          <Route path="/productos">
            <ItemListContainer />
          </Route>
        </Switch>
    </Router>
    </div>
  )
}