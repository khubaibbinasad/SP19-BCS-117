import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';

import { Avatar } from '@mui/material';
import photo7 from '../../assests/portfolio/photo7.jpg'
import {
  Container,
  Form,
  FormControl,
  Nav,
 
  NavDropdown,
} from "react-bootstrap";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handle = () => setClick(!click);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
          
      );
      const logout= () => {
          localStorage.removeItem('loginData');
          setLoginData(null);
        
         
        };

      // materal ui code
      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    navigate('/prof')
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
      
       
  return (
    <>
    
     <nav  className ="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{background:"black"}}>
            <div  className ="container">
                
                <Link  className ="navbar-brand" to="/">BPartner</Link>
                <button  className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i  className ="fas fa-bars ms-1"></i>
                </button>
                <div  className ="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul  className ="navbar-nav text-uppercase ms-auto py-4 py-lg-0">

                 
                        <li  className ="nav-item"><a  className ="nav-link" href="#services">Services</a></li>
                   
                        <li  className ="nav-item"><Link  className ="nav-link" to="/about">About</Link></li>
                        <li  className ="nav-item"><Link className ="nav-link" to="/team">Team</Link></li>
                        <li  className ="nav-item"><a  className ="nav-link" href="#contact">Contact</a></li>
                        <li  className ="nav-item"><Link className ="nav-link" to="/signin">Login</Link></li>
       
                                  <li  className ="nav-item"><Link className ="nav-link" to="/signup">signup</Link></li>
                         
                                  <NavDropdown
                  title='profile'
                  id="collasible-nav-dropdown"
                >
    
                    
           
           < NavDropdown.Item> <Link to='/prof'> PROFILE </Link>   </NavDropdown.Item >
           < NavDropdown.Item> <Link to='/add'> ADD IDEAS </Link>   </NavDropdown.Item >
           < NavDropdown.Item> <Link to='/ideas'> IDEAS DETAILS </Link>   </NavDropdown.Item >
           < NavDropdown.Item> <Link to='/myinvest'> MY INVESTMENTS </Link>   </NavDropdown.Item >
           
           
                  
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                  
                </NavDropdown>
                   
                        
                          
   {/* material ui code */}
   <Avatar style={{cursor: "pointer"}}
        id="basic-button"
       
        variant='dot'
        overlap="circular"
        
     src={photo7}
        onClick={handleClick}
        
      >
       
      </Avatar>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem><Link to=''> PROFILE </Link></MenuItem>
        <MenuItem><Link to='/addidea'> ADD IDEAS </Link></MenuItem>
        <MenuItem><Link to='/idea'>IDEAS DETAILS </Link></MenuItem>
       
       
        <MenuItem><Link to='/signup' onClick={logout}> Signout</Link></MenuItem> */}
        
      {/* </Menu> * */}
               

                    </ul>

                    
                </div>
            </div>
        </nav>
        <div>
     
        </div>
    
    <div>

   
    </div>
    </>
  )
}

export default Navbar