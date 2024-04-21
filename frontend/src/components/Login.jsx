import * as React from 'react';
import { useState,useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { API_URL, TOKEN_KEY} from '../utils/constants'
import "../App.css";


export default function Login() {
  const[loginInfo, setLoginInfo] = useState({
    email:'',
    password:''
})
const [msg, setMsg]=useState('')  
const [showPassword, setShowPassword] = React.useState(false);


// passwoord 
const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    // navigate
    const navigate = useNavigate()
    
    const loginHandler=(event)=>{
          event.preventDefault();
      fetch(`http://localhost:5000/api/login`,
      {
          method:'POST',
          body:JSON.stringify({email:loginInfo.email, password:loginInfo.password}),
          headers: {
            'Content-Type': 'application/json',
          }
      }
      )
      .then(res=>res.json())
    .then(data=>{
      
      if(data.status==200){
          localStorage.setItem('token',data.token)
            navigate('/list')
      }
      setMsg(data.msg)
    }).catch((e) => setMsg(e.msg))
    }



    const loginEmail=(e)=>{
      setLoginInfo({...loginInfo,email:(e.target.value)})
    }
    
    const loginPassword=(e)=>{
      setLoginInfo({...loginInfo,password:(e.target.value)})
    }

  return (
  <div className='authform'>
  <FormControl sx={{ mt: 2, mb: 4, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
            id="standard-adornment-password"
            type="text"
             onChange={loginEmail}

          />
        </FormControl>
      <FormControl sx={{ mt: 2, mb: 4, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            onChange={loginPassword}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

      <Button variant="contained"
       onClick={loginHandler}
       >Login</Button>
      <p>{msg}</p>
     <p>Don't have account? </p>
     <a onClick={()=>{navigate('/registration')}}>sign up</a>
    </div>
  );
}
  
