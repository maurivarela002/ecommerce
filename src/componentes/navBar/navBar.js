import React from 'react';
import { Navbar } from 'react-bootstrap';

export const NavBar = ({inicio, home}) => {
    return (
      <Navbar variant="dark" bg="dark">
      <Navbar href="#">{inicio}</Navbar>
      <Navbar href="#">{home}</Navbar>
    </Navbar>
    )
}