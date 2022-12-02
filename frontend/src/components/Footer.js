import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						
						<a
							rel='noopener noreferrer'
							href='https://www.teachforindia.org/'
							target='_blank'
							className='Ashish'
						>
							<i className='fas fa-user-circle'></i> Teach For India
						</a>
						
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
