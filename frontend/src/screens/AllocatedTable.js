import React from 'react'
import { Table } from 'react-bootstrap'
import AllocatedScreen from './AllocatedScreen'

const AllocatedTable = ({users}) => {
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
         
        <th>Class Location</th>

        <th>Allocated ClassroomID</th>
        <th>Requirement Left</th>
        <th>Class Languages Required</th>
    </tr>
  </thead>
      {
            users.map((ele,ind)=>(
          <AllocatedScreen key={ele._id} ind={ind} ele={ele}/>
          
        ))
      }
</Table>
  )
}

export default AllocatedTable
