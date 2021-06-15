import './home.css';
import { NavBar } from '../src/componentes/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () =>{
  const navInicio = "Fulbito";
  const navHome = "Home";

  return (
    <div className="homeNav">
    <NavBar 
      inicio={navInicio}
      home={navHome}
    />
    </div>
 
  )
}
export default Home;
