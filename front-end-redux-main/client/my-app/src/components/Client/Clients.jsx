import React from 'react'
import microsoft from '../../assests/logos/microsoft.svg'
import google from '../../assests/logos/google.svg'
import ibm from '../../assests/logos/microsoft.svg'
import facebook from '../../assests/logos/facebook.svg'



const Clients = () => {
  return (
    <>

<div  className ="py-5">
            <div  className ="container">
                <h1 className ="container"style={{textAlign:'center'}}>Our Clients</h1>
                <div  className ="row align-items-center">
                    <div  className ="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img  className ="img-fluid img-brand d-block mx-auto" src={microsoft} alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div  className ="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img  className ="img-fluid img-brand d-block mx-auto" src={google} alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div  className ="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img  className ="img-fluid img-brand d-block mx-auto" src={facebook} alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div  className ="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img  className ="img-fluid img-brand d-block mx-auto" src={ibm} alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Clients