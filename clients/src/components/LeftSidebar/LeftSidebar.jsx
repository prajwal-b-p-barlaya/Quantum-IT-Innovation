import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../assets/Globe.svg'
import QnA from '../assets/Screenshot 2024-02-27 173805.png'
import Home from '../assets/Home.png'
import Tags from '../assets/Tags.png'
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
      {/* added here for responsivesnesss */}

      <button onClick={handleClick} className="nav-btn">
      <NavLink to='/' className='side-nav-links' activeClassName='active'>
      <img src={Home} alt="Home" width="20px"/>
<p>
Home  
</p>

      </NavLink>
      </button>

      <div className='side-nav-div'>
        <div>
       
          <p> <img src={Globe} alt="Globe" width="20px"/> <b> PUBLIC</b></p>
        </div>


        <button onClick={handleClick} className="nav-btn">
        <NavLink to='/Questions'  className="side-nav-links" style={{ paddingLeft: "40px" }}>
        <img src={QnA} alt="Questions" width="20px"/>
       
          <p >Questions</p>
        </NavLink>
</button>

<button onClick={handleClick} className="nav-btn">
        <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <img src={Tags} alt="Tags" width="20px"/>
              {/* <i class="fas fa-question-circle"></i> */}
              {/* <FontAwesomeIcon icon={faQuestionCircle} /> */}
              {/* <FontAwesomeIcon icon={faQuestionCircle} /> */}
               <p>Tags</p>
            </NavLink>
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