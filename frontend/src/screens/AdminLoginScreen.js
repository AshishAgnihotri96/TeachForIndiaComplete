
import React, { useState, useEffect } from 'react'

import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



  

import FormContainer from '../components/FormContainer'
import Message from '../components/Message'

const AdminLoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(
		() => {
			
				if(email && password)
        {
          history.push(redirect)
        }
			
		},
		[history, redirect] 
	)

  const submitHandler = (e) => {
		e.preventDefault()
		 
		if(!email=="" && !password=="")
    {
        
    }
    else{
      setMessage("All Fields are required")
    }
    
	}

  return (
    <FormContainer>
    <h1>Admin Sign In</h1>
    <p className="mess">You can Sign In with Any Email And Password</p>
    {message && <Message variant='danger'>{message}</Message>}
    <Form onSubmit={submitHandler}>
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
      {/* Password */}
      <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      {/* Button */}
      <Link to={email.length>0 && password.length>0?"/adminsection":"/admin"}>
      <Button  type='submit' variant='primary'>
        Sign In
      </Button>
      </Link>
     
    </Form>
    
   
  </FormContainer>
  )
}

export default AdminLoginScreen
