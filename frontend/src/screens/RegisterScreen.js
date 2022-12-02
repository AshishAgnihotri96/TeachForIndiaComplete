import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'




const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const[contact_information,setcontact_information]=useState('')
	const[userlocation,setuserlocation]=useState('')
	const[spoken_languages,setspoken_languages]=useState([])
	const[availability,setavailability]=useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()
	
	const handleAdd=()=>{
		const abc=[...spoken_languages,[]]
		setspoken_languages(abc)
		
	}
	const handleChange=(onChangeValue,i)=>{
		
	 const inputdata=[...spoken_languages]
	 inputdata[i]=onChangeValue.target.value;
	 
	 setspoken_languages(inputdata)
	
	}
	const handleDelete=(i)=>{
		const deletVal=[...spoken_languages]
		deletVal.splice(i,1)
		setspoken_languages(deletVal)  
	}
	
	// useSelector is to grab what we want from the state
	const userRegister = useSelector((state) => state.userRegister)
	const { loading, error, userInfo } = userRegister
	

	const redirect = location.search ? location.search.split('=')[1] : '/'

	// make request here upon component load
	useEffect(
		() => {
			if (userInfo) {
				history.push(redirect)
			}
		},
		[history, userInfo, redirect] // Dependencies, on change they fire off useEffect
	)
	
	const submitHandler = async(e) => {
		e.preventDefault()
		
		// Check if passwords match
		if (password !== confirmPassword) {
			setMessage('Passwords do not match')
		} 
		if(name==''||email==''||password==''||contact_information==''||userlocation==''||spoken_languages==[]||availability=='')
		{
			setMessage("All Fields are required")
		}
		else {
		
		 dispatch(register(name, email, password,contact_information,userlocation,spoken_languages,availability))
		alert("Register Successfully")
		}
	}
	
	return (
		<FormContainer className="mt-13">
			<h1>Volunteer Sign Up</h1>
			{/* 
            On error, display message/error
            When loading, display Loading... */}
			{message && <Message variant='danger'>{message}</Message>}
		
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				{/* Name */}
				<Container style={{display:"flex",gap:"6rem"}}>
				<Form.Group className='mr2' controlId='name'>
					<Form.Label >Name</Form.Label>
					<Form.Control
					 	class="form-control"
						
						type='text'
						placeholder='Enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>
				{/* Email */}
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>
				</Container>
				{/* Password */}
				<Container style={{display:"flex",gap:"6rem"}}>
				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				{/* Confirm Password */}
				<Form.Group controlId='confirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Confirm password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				</Container>
				<Container style={{display:"flex",gap:"6rem"}}>
				<Form.Group controlId='contact_information'>
					<Form.Label>Contact Information</Form.Label>
					<Form.Control
						type='number'
						placeholder='Enter Contact Information'
						value={contact_information}
						onChange={(e) => setcontact_information(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='userlocation'>
					<Form.Label>Location</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Location'
						value={userlocation}
						onChange={(e) => setuserlocation(e.target.value)}
					></Form.Control>
				</Form.Group>
				</Container>
				<Container style={{display:"flex",gap:"2.75rem"}}>
				
				<Form.Group controlId='availability'>
					<Form.Label>Availability</Form.Label>
					<h6 className="visibleNow">Hint: Which days of the week you are<br/> available to support<br/> the class</h6>
					<Form.Control
						type='text'
						placeholder='Availability'
						value={availability}
						onChange={(e) => setavailability(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='Language'>
					<Form.Label>Language</Form.Label>
					<Button style={{marginLeft:"1rem"}} onClick={()=>handleAdd()}>{spoken_languages.length>0?"Add More":"Add"}</Button>
        			<>
					{spoken_languages.length>0 && spoken_languages.map((data,i)=>{
            		return(
               		<div key={i}>
                    <input className='lang_inp' value={data} onChange={e=>handleChange(e,i)} />
                    <Button className=' btn-danger btn-work' onClick={()=>handleDelete(i)}>x</Button>
               		</div>
            		)
        			})}

						</>
						</Form.Group>
				</Container>
				{/* Button */}
				<Button type='submit' variant='primary'>
					Register
				</Button>
			</Form>
			{/* Register */}
			<Row className='py-3'>
				<Col>
					Have an Account?{' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Login
					</Link>
				</Col>
			</Row>
			
		</FormContainer>
	)
}

export default RegisterScreen
