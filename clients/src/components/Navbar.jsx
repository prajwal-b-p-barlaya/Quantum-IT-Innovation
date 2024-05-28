import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Avatar from '../components/Avatar/Avatar'
import '../components/Navbar.css'
import {useSelector,useDispatch} from 'react-redux'
import {setCurrentUser} from '../actions/currentUser'
// import decode from 'jwt-decode'
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import bars from '../components/assets/bars.svg'


const Navbar = ({ handleSlideIn }) => {
    const dispatch =useDispatch()
    const Navigate=useNavigate()
    var User=useSelector((state)=>(state.currentUserReducer))
   
  

    const handleLogout=()=>{
      dispatch({type:'LOGOUT'});
      Navigate('/')
      dispatch(setCurrentUser(null))
    }

    useEffect(()=>{
      const token=User?.token

if(token){
 const decodedToken= jwtDecode (token)
 if(decodedToken.exp * 1000 < new Date().getTime()){
   handleLogout();
 }
}   
   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
   },[User?.token, dispatch]);

  return (
    <nav className='navbarjsx'>
    <div className='navbar'>
    <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>

      
       <div className="navbar-1">
{ User === null ? 
<Link to='/Auth' className='nav-item nav-links'>&nbsp;&nbsp;Log In / SignUp

</Link>:

<>
<Avatar backgroundColor='#009dff' px="10px" py="11px" borderRadius="50%" color='white'> <Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
&nbsp;
<button className='nav-item nav-links' onClick={handleLogout} >Log Out </button>
</>
  }

</div>
<div className='navbar-2'>
<Link to='/' />
</div>
    </div>
    </nav>

  )
}

export default Navbar