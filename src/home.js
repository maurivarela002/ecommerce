import './home.css';
import { NavBar } from '../src/componentes/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo.gif'; // Tell webpack this JS file uses this image

export const Home = () =>{
  const navInicio = "Fulbito";
  const navHome = "Home";
  return (
    <div className="homeNav">
    <NavBar 
      logo={logo}
      inicio={navInicio}
      home={navHome}
    />
    </div>
 
  )
}
export default Home;
