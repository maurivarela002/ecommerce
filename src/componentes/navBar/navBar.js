import {React} from 'react';
import '../navBar/navBar.css'
import { Navbar } from 'react-bootstrap';

export const NavBar = ({inicio, home, logo}) => {
    return (
      <Navbar variant="dark" bg="dark">
      <img className="img" src={logo} alt="Logo" />
      <Navbar href="#">{inicio}</Navbar>
      <Navbar href="#">{home}</Navbar>
    </Navbar>
    )
}