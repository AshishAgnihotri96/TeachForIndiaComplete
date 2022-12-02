import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import {  listUsers } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

import VolunteerTable from './VolunteerTable'
import { listData } from '../actions/dataActions'

import AllocatedTable from './AllocatedTable'


const ProfileScreen = () => {


	const dispatch = useDispatch()

	// useSelector is to grab what we want from the state
	const userList = useSelector((state) => state.userList)
  const {users,loading,error}=userList
 
  const[allocation,setAllocation]=useState(false)
  const[active,setActive]=useState(false)
  const[message,setMessage]=useState("")
  useEffect(()=>{
    dispatch(listUsers())
    dispatch(listData())
  },[dispatch])

  
  const handleUsers=()=>{
   
    setAllocation(false)
    if(users.length>0)
    { 
      setActive(true)
    }
    else{
      setMessage("No Volunteer Registered")
    }
  }
 
 
  const handleAllocation=()=>{
   
    setActive(false)
    if(users.length<20)
    {
      setMessage(`20 Registrations Were Not Complete`)
    }
    else{
      setAllocation(true)
     
    }
   
  }          
	return (
		<div>
			
          {loading&&<Loader/>}
          {error && <Message variant='danger'>{error}</Message>}
          {message && <Message variant='danger'>{message}</Message>}
					<center>
          <Row>
          <Col>
          <Button onClick={handleUsers}  variant='primary'>
					Get all	Volunteer 
					</Button>
          </Col>
          <Col>
          <Button onClick={handleAllocation}  variant='primary'>
						Allocated Volunteers
					</Button>
          </Col>
          </Row>
          </center>
          {
            active && <VolunteerTable users={users}/>
          }

          {
            allocation && <AllocatedTable users={users} />
          }

          
		</div>
	)
}
//this is a corrected
export default ProfileScreen
