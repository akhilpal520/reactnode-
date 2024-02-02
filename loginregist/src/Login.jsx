import { Checkbox, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disableLogin, setDisableLogin] = useState(false); // State to disable login button
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Enter your email id');
      setDisableLogin(true); // Disable login button if email is empty
    } else if (password === '') {
      setError('Enter your password');
      setDisableLogin(true); // Disable login button if password is empty
    } else {
      axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
          console.log(result);
          if (result.data === "Success") {
            navigate('/home');
          }
        })
        .catch(err => console.log(err));
    }
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%' }}>
      <form onSubmit={handleSubmit} style={{ height: '600px', width: '500px', backgroundColor: '#2D9596', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '35%', top: '15%', zIndex: '1' }}>
          <Link to="/register" style={{ padding: '15px 50px ', backgroundColor: '#04edda', color: '#0959aa', border: 'none' }}>SIGN IN</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '400px', width: '350px', position: 'absolute', top: '50%', left: '50%', border: '1px solid black', transform: 'translate(-50%,-50%)', backgroundColor: '#10254d' }}>
        <div style={{color:'white'}}>{error}</div>
          <div> <AccountCircleIcon style={{ height: '80px', width: '80px', color: '#73918E' }} /></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: '#73918E' }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setEmail(e.target.value);
                setDisableLogin(false); // Enable login button if email is not empty
              }}
              id="filled-basic"
              placeholder="Email"
              variant="filled"
              style={{ backgroundColor: '#485856', borderRadius: '15px' }}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: '#73918E' }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setPassword(e.target.value);
                setDisableLogin(false); // Enable login button if password is not empty
              }}
              style={{ backgroundColor: '#485856', borderRadius: '15px', color: '#73918E' }}
              id="password-input"
              placeholder="password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div><Checkbox style={{ color: '#2D9596', backgroundColor: 'transparent', border: 'none' }} {...label} /></div>
            <div><button style={{ color: '#2D9596', backgroundColor: 'transparent', border: 'none' }}>Remember me</button></div>
            <button style={{ color: '#2D9596', backgroundColor: 'transparent', border: 'none' }}> Forgot your password?</button>
          </div>
          <div><button disabled={disableLogin} style={{ backgroundColor: '#04edda', color: '#0959aa', padding: '12px 100px', bottom: '10%' }}>LOGIN</button></div>
        </div>
      </form>
    </div>
  );
};
export default Login;
