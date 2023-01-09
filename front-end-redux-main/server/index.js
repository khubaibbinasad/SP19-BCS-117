const express = require('express')
const bodyParser=require('body-parser')
  
 require('dotenv').config();

 const cors=require('cors')

 const mongoose =require ('mongoose');



const app = express();
const port = process.env.PORT || 5000


app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(express.json())

 const mainRoutes = require('./route/user')
 app.use(mainRoutes)


 const ideasRoutes = require('./route/ideasroute')
 app.use(ideasRoutes)






// it is the code of the express.js which is used to req and res responses 
app.get('/', (req, res) => {
  res.send('Hello World!')
   
})

// our mongodb connection will be start from there

 const DB=process.env.PRIVATE_KEY
 mongoose.connect(DB,
   err => {
       if(err) throw err;
       console.log('connected to MongoDB')
   });

  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
