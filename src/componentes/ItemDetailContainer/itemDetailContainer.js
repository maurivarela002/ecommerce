import { React, useEffect,useState } from "react";
import "./itemDetailContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgDes from "../../assets/pokemon.jpg"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const [arrayDescF, setArrayDescF] = useState();
  const [arrayDescT, setArrayDescT] = useState();
  const [arrayDescD, setArrayDescD] = useState();


  useEffect(() => {
    const getDesc = async () => {
      const foto = imgDes
      const titleDescripcion = "Tipo"
      const descripcion = "Descripcion"

      setArrayDescF(foto)
      setArrayDescT(titleDescripcion)
      setArrayDescD(descripcion)
    };
    getDesc();
}, []);

  return (
    <div>
      <ItemDetail foto={arrayDescF} title={arrayDescT} descripcion={arrayDescD} />
    </div>
  );
};