import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import {ProductConsumer} from './Contaxt';
import Button from 'react-bootstrap/Button';

class Nodal extends Component {

    
       
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    return(
                        
                        
            
                
                  
<Modal show={value.modalcondition}>
  <Modal.Header onClick={()=>{console.log( value.modalclosebutton())}} closeButton>
    <Modal.Title></Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Thankyou For Attempt This Quiz</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{console.log( value.modalclosebutton())}}>Close</Button>
   
  </Modal.Footer>
</Modal>                      
        

            )
                }
    }
            </ProductConsumer>
        
        )
    }

 
}




 
export default Nodal