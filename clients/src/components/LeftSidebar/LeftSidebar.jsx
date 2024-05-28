import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Users from '../assets/Users.png'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

const LeftSidebar=({ slideIn, handleSlideIn })=>{
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  const handleClick = () => {
    if (typeof handleSlideIn === "function") {
      handleSlideIn();
    }
  };

   {/* {SlideIn function used for responsivesnesss not done is lecturer ...... updated last by looking into github } */}




return(
  <div className='left-sidebar' style={slideIn ? slideInStyle : slideOutStyle}>
    <nav className='side-nav'>
      <div className='side-nav-div'>

        <button onClick={handleClick} className="nav-btn">
        
</button>


     <button onClick={handleClick} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
             <img src={Users} alt="Users" width="21px"/> <p> &nbsp;Users</p>
            </NavLink>
            </button>
      </div>

    </nav>
  </div>
)
}

export default LeftSidebar