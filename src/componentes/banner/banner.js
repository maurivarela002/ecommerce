import { React, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './banner.css';
import { UserContext } from '../../context/userContext'


export const Banner = () => {
    const {nombre, apellido} = useContext(UserContext);

  return (
    <div className="">
        <h2 className="textBanner">
            Bienvenido {nombre} {apellido} a Fulbito, aca podes encontrar tu producto deportivo Favorito!
        </h2>
    </div>
  );
};
