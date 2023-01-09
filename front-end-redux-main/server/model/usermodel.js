const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a userschema
const userSchema = new Schema({
   
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
 
     
 });




module.exports = mongoose.model("CRUD", userSchema);