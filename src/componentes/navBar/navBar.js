import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../navBar/navBar.css'
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { Navbar } from 'react-bootstrap';

export const NavBar = ({ logo, productos }) => {
  return (
    <Router>
      <div>
        <Navbar variant="dark" bg="dark">
          <Link to="/">
            <img className="img" src={logo} alt="Logo" />
          </Link>
          <Navbar.Brand >
            <Link to="/productos">{productos}</Link>
          </Navbar.Brand>
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
      </div>
    </Router>
  )
}