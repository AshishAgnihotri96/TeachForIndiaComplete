import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Meta from '../components/Meta'
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal'
import ProductCarousel from '../components/ProductCarousel'


const HomeScreen = ({ match }) => {

		
	return (
		<>	
			<Meta />
			<ProductCarousel/>
			
		</>
	)
}

export default HomeScreen
