import React, { useState } from 'react'
import './Auth.css'
import icon from '../../components/assets/icon.png'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/auth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Auth = () => {

    
    const [isSignup, setIsSignup]= useState(false)
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')


  const dispatch=useDispatch()
  const navigate=useNavigate()


//   const handleSwitch = () => {setIsSignup(!isSignup)}
const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };  

  const handleSubmit =(e)=>{
    
    e.preventDefault()
    if(!email && !password){
        alert("Dear User, Please enter your email ID and password to continue!")
      
    }
    // if(!password){
    //     alert("Dear User, Please enter password to continue!")
      
    // }
    if(isSignup){
        if(!name){
            alert("Dear User, Please enter your name to continue!")
        }
       dispatch(signup({name,email,password},navigate))

    }
    else{
        dispatch(login({email,password},navigate))
    }
    // else 
    // console.log({name,email,password})
  }
    return (
   <section class='auth-section'>
    {
        isSignup && <AboutAuth/>
    }
    <div class='auth-container-2'>
    <img src={icon} alt='stack overflow' width="50px" className='login-logo'/>
      <form onSubmit={handleSubmit}>
        {
            isSignup && (
                <label htmlFor='name'>
                    
                    <h4 class="headername">Name</h4>
                    <input type="text" id='name' name='name'value={name}  onChange={(e)=> {setName(e.target.value);
                    }}/>
                </label>
            )
        }
        <label htmlFor="email">
            <h4 >Email</h4>
            <input type="email" name='email' id='email' value={email} onChange={(e)=> {setEmail(e.target.value);
            }}/>

        </label>
        <label htmlFor="password">
        {/* style={{display:"flex",justifyContent:"space-between", alignContent:"center",alignItems:"center"}} */}
         {/* this was for below div */}
           <div >
            <h4 > Password</h4><br></br>
         
            </div>
            <input type="password" name='password' id='password' value={password} onChange={(e)=> {setPassword(e.target.value);
            }}/>
            {!isSignup && <h4 style={{color:"#007ac6",fontSize:'13px'}}>Forgot Password ?</h4> }
{ isSignup && <p style={{color:"666767",fontSize:"13px",textAlign:"center"}}>Passwords must contain at least eight digits <br></br> of which a Capital letter , small letters and atleast 1 number <br></br>and a special character</p>}

        </label>

{
    isSignup && (
        <label htmlFor='check' style={{fontSize:"13px",alignContent:"center",justifyContent:"center",alignItems:"center"}}>
<input type="checkbox" id='check' style={{boxSizing:"small",width:"20px",paddingLeft:"10%"}}/>
<p style={{fontSize:"13px",alignContent:"center",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    Opt-in to receive ocasionally <br></br>product updates and user research invitations and ,<br></br>company announcements.
  
</p>
        </label>
    )
}

        <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log In'}</button>
    
    {
        isSignup && (
            <p style={{color:"#666767", fontSize:"13px"}}>
                By clicking "Signup" you agree to our 
                
                <span style={{color:"#007ac6"}}> terms of service</span>,
                <span style={{color:"#007ac6"}}> privacy policy </span>and
                <span style={{color:"#007ac6"}}> cookie policy.</span>
            </p>
        )
    }
      </form>

      <p>


        {isSignup ? 'Already have an account ?' : "Don't Have an account?"}
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log In" : 'Sign up'}</button>

      </p>
    </div>

   </section>
  )
}

export default Auth

