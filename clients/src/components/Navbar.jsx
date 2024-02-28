import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import logo from '../components/assets/logo.png'
import search from '../components/assets/search.svg'
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
       <Link to='/' className='nav-item nav-logo'>
        <img src={logo} alt='logo' width="180px" style={{paddingRight:"100px"}}/>
        {/* <img src="clients/logo.png"></img> */}

       
       </Link>



       <Link to='/About' className='nav-item nav-btn res-nav' style={{paddingLeft:"500px",textDecoration:"bold",color:"black"}} >ABOUT </Link>
       <Link to='/' className='nav-item nav-btn res-nav' style={{paddingLeft:"5px"}}>Products</Link>
       <Link to='/' className='nav-item nav-btn res-nav'style={{paddingLeft:"5px"}}>For Teams</Link>
       <form>
        <input type="text" placeholder='       Search Here...' style={{paddingLeft:"5px"}}width="20px"/>
        <img src={search} alt='search' width="18" className="search-icon" />
       </form>
       </div>




       
       {/* these parts are updated in order to make it resposnive  */}


       

       <div className="navbar-2">
{ User === null ? 
<Link to='/Auth' className='nav-item nav-links'>Log In

</Link>:

<>
<Avatar backgroundColor='#009dff' px="10px" py="11px" borderRadius="50%" color='white'> <Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
&nbsp;
<button className='nav-item nav-links' onClick={handleLogout} >Log Out </button>
</>
  }

</div>
    </div>
    </nav>

  )
}

export default Navbar