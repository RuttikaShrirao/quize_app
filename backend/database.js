const mongoose  = require("mongoose");
require ("dotenv").config(); 
const mongoURL = process.env.databaseurl
const connectdb= async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("db connected")
    }catch(err){
        console.log(err,"error")
    }
}

module.exports = connectdb