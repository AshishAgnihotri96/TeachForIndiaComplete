import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import { logout } from '../actions/userActions'

const Header = () => {
	const dispatch = useDispatch()

	// useSelector is to grab what we want from the state
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header className='headers '>
			<Navbar
				className='text-uppercase nav-main '
				
				expand='lg'
				collapseOnSelect
			>
				<Container >
					
					<LinkContainer to='/'>
						<Navbar.Brand>Teach For India</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						
						<Nav className='ml-auto'>
							
							
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									{/* Logout */}
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								// Login
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i>User Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							<LinkContainer to='/admin'>
									<Nav.Link>
										<i className='fas fa-user'></i> Admin Section
									</Nav.Link>
								</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
