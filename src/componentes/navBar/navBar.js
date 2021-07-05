import { React } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../navBar/navBar.css'
import fotoCart from "../../assets/carrito.png";
import { Navbar } from 'react-bootstrap';

export const NavBar = ({ logo, productos,Items }) => {


  return (
    <div className="navbar-header">
    <Router>
        <Navbar variant="dark" bg="dark">
          <Link to="/">
            <img className="img" src={logo} alt="Logo" />
          </Link>
          <Navbar.Brand >
            <Link className="productos" to='/category/:id'>{productos}</Link>
          </Navbar.Brand>
          <Navbar.Brand >
            <Link className="productos" to='/category/:id'>{Items}</Link>
          </Navbar.Brand>
          <div className="ml-auto">
          <img className="cartImg" src={fotoCart} alt="fotoCart" />
          </div>
        </Navbar>
    </Router>
    </div>
  )
}