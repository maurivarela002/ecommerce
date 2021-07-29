import { React } from 'react';
import {
  Link
} from "react-router-dom";
import '../navBar/navBar.css'
import { Navbar } from 'react-bootstrap';

export const NavBar = ({ logo, Guantes, Botines, Camisetas }) => {

  return (
    <div className="navbar-header">
      <Navbar variant="dark" bg="dark">
        <Link to="/">
          <img className="img" src={logo} alt="Logo" />
        </Link>

        <Navbar.Brand >
          <Link className="productos" to='/category/Guantes'>{Guantes}</Link>
        </Navbar.Brand>

        <Navbar.Brand >
          <Link className="productos" to='/category/Botines'>{Botines}</Link>
        </Navbar.Brand>

        <Navbar.Brand >
          <Link className="productos" to='/category/Camisetas'>{Camisetas}</Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}