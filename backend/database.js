const mongoose  = require("mongoose");

const mongoURL = "mongodb+srv://ruttikas:DolpcTrLM2XRHLdH@interview-tasks.pfj4vlt.mongodb.net/mindlense-task?retryWrites=true&w=majority&appName=interview-tasks";
const connectdb= async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("db connected")
    }catch(err){
        console.log(err,"error")
    }
}


module.exports = connectdb