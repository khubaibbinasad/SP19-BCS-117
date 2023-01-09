import axios from "axios"
const API =  'http://localhost:5000'
//  register user
const signup= async(input)=>{
    const res=axios.post('/signup',input)
    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    //   }
    return res.data

}

// Login user
const signin = async (input) => {
    const response = await axios.post('/signin', input)
  
    // if (response.data) {
    //   localStorage.setItem('user', JSON.stringify(response.data))
    // }
  
    return response.data
  }
  export default Services