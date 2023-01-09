import React from 'react'
import { Alert } from "react-bootstrap";
const Errors = ({ variant = "info" }) => {
  return (
    <>
    
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>there is something wrong</strong>
    </Alert>
    
    </>
  )
}

export default Errors