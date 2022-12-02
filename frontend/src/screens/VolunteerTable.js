import React from 'react'
import { Table } from 'react-bootstrap'
import VolunteerScreen from './VolunteerScreen'
const VolunteerTable = ({users}) => {
     
  return (
    <Table bordered hover responsive className='table-sm'>
    <thead>
    <tr>
        <th>SNo.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Location</th>
        <th>Availability</th>
        <th>Date & Time Of Registration</th>
        <th>Contact Information</th>
        <th>Spoken Languages</th>
    </tr>
  </thead>
      {
            users.map((ele,ind)=>(
          <VolunteerScreen key={ele._id} ind={ind} ele={ele}/>
          
        ))
      }
</Table>
  )
}

export default VolunteerTable
