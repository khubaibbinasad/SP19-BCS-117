
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import photo7 from '../../assests/portfolio/photo7.jpg'
import FileBase from 'react-file-base64';
import './Profile.css'
const Profile = () => {
   
    const submitHandler = (e) => {
        e.preventDefault();
    
     
      };
      const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();
  const[postDetails,setpostDetails] = useState('')  
  const   [postdata,setPostdata]=useState('')
  
  return (

   
    <>
     <header className='home-header'>
    <h2>Inc. This Morning</h2>
    <h1>
      <span> PROFILE PAGE </span>  
    </h1>
  
  </header>

   <Row className="profileContainer" >
   <Col md={6}>
   <Form  onSubmit={submitHandler}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
  </Form.Group>
  

  <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                
              </Form.Group>
              <div className='profilepic'><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostdata({ ...postdata, selectedFile: base64 })} /></div>
  <Button className="btn" variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
<Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img style={{width:'50%'}} src={photo7} alt={name} className="profilePic" />
          </Col>
   </Row>
  
    
    
    </>
  )
}

export default Profile