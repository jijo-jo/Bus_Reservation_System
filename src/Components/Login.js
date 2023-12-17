
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginData from '../Credentials/credential.json'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showerror,setShowerror] = useState(false);

  const handleLogin = () => {
    LoginData.map((data)=>{
      if(data.username === username && data.password === password){
        if(!(localStorage.getItem("logindetails"))){
          localStorage.setItem("logindetails",JSON.stringify(data));
          navigate('/dashboard')
        }
        else{
          navigate('/dashboard')
        }
        
      }
      else{
         setShowerror(true);
      }
    })
  };
  useEffect(()=>{setShowerror(false)},[username]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1> Login</h1>
      {showerror && <h4 style={{color:"red"}}>Invalid credential</h4>}
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '20px' }}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
