import React from 'react'
import ReactDOM from 'react-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel,FloatingLabel } from "react-bootstrap";



import './Contact.css'

function Contact() { 
  return (
    <div className='contactpage'>
                

                <div className="textForm">

                    <div className="text">
                    <h2 className='contactme'>Contact Us </h2>
                    <br />
                        <h3>Get in touch</h3>
                        <br />
                        <h4 className='email'>Email: mvdking0909@gmail.com</h4>
                        <br />
                        <h4 className='phone'>Phone: (+27) 78 322 8538</h4>
                        <br />
                    </div>

                     <div className="forms">
                        <div className="form">
                            <Form action="https://formsubmit.co/mvdking0909@gmail.com " method="POST">
                                <div className='nameEmail'>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <input style={{ height: '50px', width: '100%', color: 'white' }} className='formname' type="text" name="name" required placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <input style={{ height: '50px', width: '100%', color: 'white' }} className='formemail' type="email" name="email" required placeholder="Email" />
                                    </Form.Group>
                                </div>
                                <>
                                    <FloatingLabel controlId="floatingTextarea2" >
                                        <textarea
                                            name='message'
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '200px', width: '100%', color: 'white' }}
                                            className='formtext'
                                        />
                                    </FloatingLabel>
                                    <Button className='submitbtn' type="submit">
                                        Submit
                                    </Button>
                                </>
                            </Form>
                        </div> 
                    </div>
                </div>
            </div>
  )
}

export default Contact