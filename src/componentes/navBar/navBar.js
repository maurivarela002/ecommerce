import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../navBar/navBar.css'
import { ItemListContainer } from "../itemCointainer/ItemListContainer";
import { Navbar } from 'react-bootstrap';

export const NavBar = ({ home, carro, logo }) => {
  return (
    <Router>
      <div>
        <Navbar variant="dark" bg="dark">
          <img className="img" src={logo} alt="Logo" />
          <Navbar.Brand>
            <Link to="/">{home}</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/carrito">{carro}</Link>
          </Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path="/carrito">
            <ItemListContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}