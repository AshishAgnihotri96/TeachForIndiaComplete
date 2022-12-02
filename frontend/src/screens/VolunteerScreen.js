import React from 'react'
import { Col, Row } from 'react-bootstrap'

const VolunteerScreen = ({ele,ind}) => {
  
  return (

   
    <tbody>
      
                <tr key={ele._id}>
                <td>{ind+1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.user_location}</td>
                <td>{ele.availability}</td>
                <td>{ele.createdAt}</td>
                <td>{ele.contact_information}</td>
                <td>{ele.spoken_languages.map((ele,ind)=>(
                   <Row>
                         
                         <Col>{ele}</Col>
                   </Row>
                ))}</td>
                
                
               
                </tr>
       
    </tbody>

  )
}

export default VolunteerScreen
