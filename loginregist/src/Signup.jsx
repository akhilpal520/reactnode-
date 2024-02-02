import React, { useState } from 'react'
import { Checkbox, InputAdornment, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [name, setName] = useState()
const [email, setEmail] = useState()
const [date, setDate] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

 const handleSubmit = (e)  =>  {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password,date})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
 }

  return (
    <div style={{ display:'flex' , alignItems:'center', justifyContent:'center',height:'100vh', width:'100%'}}>
    <form onSubmit={handleSubmit} style={{height:'700px', width:'500px', backgroundColor:' #2D9596', position:'relative'}}>
      <div style={{ position:'absolute', left:'35%', top:'15%',zIndex:'1'}}>
        <Link to='/login' style={{padding:'15px 50px ', backgroundColor:'#04edda',color:'#0959aa', border:'none'}}>LOG IN</Link>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'500px',width:'350px',position:'absolute', top:'17%', left:'15%',border:'1px solid black' ,transform:'translate(-50%,-50%),', backgroundColor:'#10254d', borderRadius:'15px'}}>
      <div> <AccountCircleIcon style={{height:'80px', width:'80px', color:'#73918E'}}/></div>
      <div style={{display:'flex', flexDirection:'column', gap:'12px'}}> 
        <TextField   InputProps={{
        startAdornment: (
      <InputAdornment position="start">
        <PersonIcon style={{color:'#73918E'}} />
      </InputAdornment>
    ),
  }}  onChange={(e) => setName(e.target.value)} id="outlined-basic" placeholder="username" variant="outlined" style={{backgroundColor:'#485856', borderRadius:'15px'}} />
        <TextField
        InputProps={{
            startAdornment: (
          <InputAdornment position="start">
            <LockIcon style={{color:'#73918E'}}  />
          </InputAdornment>
        ),
      }}  onChange={(e) => setPassword(e.target.value)}
          style={{backgroundColor:'#485856', borderRadius:'15px',color:'#73918E'}}
          id="password-input"
          placeholder="password"
          type="password"
          autoComplete="current-password"
        /> 

<TextField  InputProps={{
            startAdornment: (
          <InputAdornment position="start">
            <EmailIcon style={{color:'#73918E'}}  />
          </InputAdornment>
        ),
      }} onChange={(e) => setEmail(e.target.value)} id="filled-basic" placeholder="Email" variant="filled"  style={{backgroundColor:'#485856', borderRadius:'15px'}}/>
<input  placeholder="DOB" onChange={(e) => setDate(e.target.value)} style={{backgroundColor:'#485856', borderRadius:'15px' , border:'none', height:'58px',textAlign:'center',color:'#73918E'}}  type="date"/>

        </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div><Checkbox style={{color:'#2D9596', backgroundColor:'transparent',border:'none'}} {...label} /></div>
        <div><button  style={{color:'#2D9596',backgroundColor:'transparent',border:'none'}}>Remember me</button></div>
        <button style={{color:'#2D9596',backgroundColor:'transparent',border:'none'}}> Forgot your password?</button>
     </div>
      <div><button  style={{backgroundColor:'#04edda', color:'#0959aa', padding:'12px 100px', bottom:'10%' , borderRadius:'15px'}}>Register</button></div>

      </div>
    </form>
    </div>
  )
}
