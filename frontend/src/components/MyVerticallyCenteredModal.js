import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const MyVerticallyCenteredModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      > <center>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          You are SuccessFully Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <p>
            Thanks For Registering, Our Team Will back to you soon. 
          </p>
          <img src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </center>
      </Modal>
    );
  }


export default MyVerticallyCenteredModal
