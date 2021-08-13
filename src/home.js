import './home.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { React } from 'react'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/itemDetailContainer'
import { NavBar } from '../src/componentes/navBar/navBar'
import { Banner } from '../src/componentes/banner/banner'
import { Cart } from '../src/componentes/cart/cart'

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../src/assets/logo.gif'

export const Home = () => {
	const navCarrito1 = 'Guantes'
	const navCarrito2 = 'Botines'
	const navCarrito3 = 'Camisetas'
	const navCarrito4 = 'Carrito'

	return (
		<div className='homeNav'>
			<Router>
				<NavBar
					logo={logo}
					Guantes={navCarrito1}
					Botines={navCarrito2}
					Camisetas={navCarrito3}
					Carrito={navCarrito4}
				/>
				<Switch>
					<Route exact path='/'>
						<Banner />
						<ItemListContainer />
					</Route>
					<Route exact path='/category/:id'>
						<ItemListContainer />
					</Route>

					<Route exact path='/item/:id'>
						<ItemDetailContainer />
					</Route>
					<Route path='/Cart'>
						<Cart />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}
export default Home
