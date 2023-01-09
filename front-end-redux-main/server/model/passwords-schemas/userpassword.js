const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a userschema
const userSchema = new Schema({
   
    name:{
        type: String,
        required: true,
        minlength:[2,'Name can not be smaller than 2 characters'],
    },
     email:{
        type: String,
        required: [true,'email should not be blank'],
        unique:true,
        index:true,
        minlength:[2,'Name can not be smaller than 2 characters'],
     },
   

    password:{
        type: String,
        required: [false,'password is required'],
        minlength:[2,'Name can not be smaller than 2 characters'],
     },
    
     
    
   } );




module.exports = mongoose.model("RESETPASS", userSchema);