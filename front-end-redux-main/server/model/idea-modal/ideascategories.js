const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a userschema
const userSchema = new Schema({
   
    name:{
        type: String,
        required: true,
        minlength:[2,'Name can not be smaller than 2 characters'],
    },
    
    
 });




module.exports = mongoose.model("CATE", userSchema);