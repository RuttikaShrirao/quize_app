const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {form, form_answer} = require('./Model/formSchema')
const connectdb =require('./database')
const reponseFormat =require('./utils')
const authModel = require('./Model/authSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtDecode =require ("jwt-decode");
const fetchuser =require('./middleware/fetchuser')
const path = require('path');
// const {createServer} = require("vite")

// Set path to .env file 
require ("dotenv").config(); 

app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// const vite = await createServer({
//   server:{
//     middlewareMode:true
//   },
//   appType:'custom'
// })
// app.use(vite.middleware)

// app.get('/', (req, res) => {
//   // Send the frontend file (e.g., index.html)
//   console.log("ggggggggggggggggg")
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// registration
// app.use('/api/registration', authrouter)
app.post('/api/registration', async(req,res)=>{
  const {email, password}= req.body
  try {
    if(((email).length==0) || ((req.body.password).length==0)){
      reponseFormat(res, status_code = 400, msg = "Please fill Details..");
    }
    else{
      const isuserExist = await authModel.findOne({email:email})
  
      if(isuserExist != null){  
          reponseFormat(res, status_code = 400, msg = "you are already registered..");
        }else{
          const salt = await bcrypt.genSalt(5)
          let newpassword =  password.toString();
          const hashedPassword=  await bcrypt.hash(newpassword,salt)
          try{
            const user = await authModel.create({email:email, password:hashedPassword})
    
            user.save()
            reponseFormat(res, status_code = 200, msg = "you are registered..");
          }
            catch (userCreationError) {
            reponseFormat(res, status_code = 500, msg = userCreationError);
          }
        }
      }
    
  } catch (error) {
     reponseFormat(res, status_code = 500, msg = error)
  }

})


// login
app.post('/api/login',async(req,res)=>{
  const {email, password}= req.body

  try {
    if(((email).length==0) || ((req.body.password).length==0)){
      reponseFormat(res, status_code = 400, msg = "Please fill Details..");
    }
    else{
      const isuserExist = await authModel.findOne({email:email})
     
      if(isuserExist != null){  
    
        let newpassword = password.toString();
        const matchPassword= await bcrypt.compare(newpassword,isuserExist.password)
        if(matchPassword){
          let token=jwt.sign({email:isuserExist.email, id:isuserExist._id}, process.env.SECRET_KEY)
          console.log(token,"ppp",req.body.password)
          // reponseFormat(res, status_code = 200, msg = "you are logged in", token=token);
          res.status(200).send({
            status: 200,
            msg: "you are logged in",
       
            token:token,
          })
        }
        }else{
          reponseFormat(res, status_code = 400, msg = "user doesn't exist..");
        }
      }
    
  } catch (error) {
     reponseFormat(res, status_code = 500, msg = error)
    }
    
  })

// create form
app.post('/api/create_form',fetchuser,async(req,res)=>{
  let {form_name, catagory}= req.body
  try {
    userId=req.id
    const formdb = await form.create({user_form_creater_id:userId.id, form_name:form_name, catagory:catagory})
    // reponseFormat(res, status_code = 200, msg ="")
    console.log(formdb)
    res.status(200).send({
      status: 200,
      msg: "",
      id:formdb. _id
    })
  }
  catch(error){
    reponseFormat(res, status_code = 500, msg = error._message)
  }
})

// user-list
app.get('/api/user-list',async(req,res)=>{
  console.log("sdfgsfdgsfd")
  try{
    const user_list = await form.find({},{form_name:1,
      // _id:0,
     date:1});
     
   reponseFormat(res, status_code=200, msg="data fetched", data = user_list)
  }
  catch(error){
    reponseFormat(res, status_code = 500, msg = error)
  }
})

// form filler form(display_form)
app.get('/api/get_form-data/:id',async(req,res)=>{
  try{
    const form_data = await form.findOne({_id:req.params.id},{form_name:1,
      catagory:1,
      questions:1,
      // _id:0,
     date:1});
   reponseFormat(res, status_code=200, msg="data fetched", data = form_data)
  }
  catch(error){
    reponseFormat(res, status_code = 500, msg = error)
  }
})


// answed_by_user
app.post('/api/answed_by_user',async(req,res)=>{
  let { form_id, answered_byuser}= req.body
  console.log(req.body.form_id, "pp", req.body.answered_byuser, answered_byuser)
  try {
    
    const form_answerdb = await form_answer.create({ form_id:form_id, answered_byuser:answered_byuser})
    reponseFormat(res, status_code = 200, msg ="your response has been Submitted...")
  }
  catch(error){
    reponseFormat(res, status_code = 500, msg = error._message)
    console.log('erroc')
  }
})


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});




connectdb().then(()=>{
    // app.use(express.static(process.cwd()+"/dist"))
    app.listen(process.env[process.env.port] || 5000, () => {
        console.log(`server is running on ${process.env.port}`);
      });                                                                                                                                                                                                                                                                                                                                              
})
