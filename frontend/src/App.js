import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

import AdminLoginScreen from './screens/AdminLoginScreen'
import AdminSection from './screens/AdminSection'


const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					{/* LoginScreen */}
					<Route path='/login' component={LoginScreen} />
					{/* RegisterScreen */}
					<Route path='/register' component={RegisterScreen} />
					{/* ProfileScreen */}
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/admin' component={AdminLoginScreen} exact />
					<Route path='/' component={HomeScreen} exact />
					<Route path='/adminsection' component={AdminSection}  />
				</Container>
			</main>
			<Footer />
		
		</Router>
	)
}

export default App
