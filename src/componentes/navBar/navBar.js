import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../navBar/navBar.css'
import { ItemListContainerDetails } from "../itemCointainer/ItemListContainerDetails";
import { Navbar } from 'react-bootstrap';

export const NavBar = ({ logo, carro }) => {
  return (
    <Router>
      <div>
        <Navbar variant="dark" bg="dark">
          <Link to="/">
            <img className="img" src={logo} alt="Logo" />
          </Link>
          <Navbar.Brand >
            <Link to="/carrito">{carro}</Link>
          </Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path="/carrito">
            <ItemListContainerDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}