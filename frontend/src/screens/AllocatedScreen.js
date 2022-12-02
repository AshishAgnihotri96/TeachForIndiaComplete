import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AllocatedScreen = ({ele,ind}) => {
    console.log(ele)
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
         <td>{ele.allocation.map((ele)=>(
        <Row>
            <Col>{ele.location}</Col>  
        </Row>
      ))}</td>
      <td>{ele.allocation.map((ele)=>(
        <Row>
            <Col>{ele.classroomID}</Col>  
        </Row>
      ))}</td>
          <td>{ele.allocation.map((ele)=>(
        <Row>
            <Col>{ele.requirement}</Col>  
        </Row>
      ))}</td>
       <td>{ele.allocation.map((ele,i)=>(
       
            <Col>{ele.languageRequirement.map((ele,i)=>(
                <Col>{ele}</Col>
            ))}</Col>  
         
      ))}</td>
         
    
   
    </tr>

</tbody>
  )
}

export default AllocatedScreen
