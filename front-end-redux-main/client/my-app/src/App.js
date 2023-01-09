
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import About from './components/About/About';
import { useNavigate } from 'react-router-dom';

import Team from './components/Team/Team';

import Hero from './components/ideas-details/Hero/Hero'

import Passwordforget from './components/Passwordreset/Passwordforget';
import Addideas from './components/Add ideas/Addideas';

import Profile from './pages/profile/Profile';
import Postdetails from './components/ideas-details/postdetails/Postdetails';
function App() {
  const navigate=useNavigate()
  return (
    <>
    <div className="App">
    
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />}  />
     
      <Route path='/about' element={<About />} />
      
      <Route path="/team" element={<Team/>}  />
     
      <Route path="signup" element={<Signup/>}  />
      <Route path="signin" element={<Signin/>}  />
       {/* Add ideas router will be start from there */}

   
 
      <Route path="password-reset" element={<Passwordforget/>}  />
      <Route path="/add" element={<Addideas/>}  />
    
      <Route path="/ideas" element={<Hero/>}  />
      <Route path="/ideas/search" element={<Hero/>}  />
      <Route path="/ideas/:id" element={<Postdetails/>}  />
      
      
      <Route path="/prof" element={<Profile/>}  />
      <Route path="*" element={<h1>404 page nothing has found there</h1>}  />
      </Routes>
    

    </div>
   
   
    </>
  );
}

export default App;
