
import React, { useState, useEffect } from 'react'

import { Form, Button, Row, Col } from 'react-bootstrap'


import FormContainer from '../components/FormContainer'
import Message from '../components/Message'

const AdminLoginScreen = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const submitHandler = (e) => {
		e.preventDefault()
		 
		// if(!email=="" && !password=="")
    // {
    //   document.location.href="/adminsection"
    // }
    // else{
    //   setMessage("All Fields are required")
    // }
    document.location.href="/adminsection"
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
      <Button type='submit' variant='primary'>
        Sign In
      </Button>
    </Form>
    
   
  </FormContainer>
  )
}

export default AdminLoginScreen
