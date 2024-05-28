import React from 'react'
// import { Link } from 'react-router-dom';
import Pb from '../components/assets/Pb.png'
import './About.css'


const About = () => {
  return (

    <div className="aboutthing" style={{alignItems:"center",textAlign:"center"}}>
    <><div >:The page contains the information of the developer who have developed this website </div>
    <div className="namemy">
          <p>PRAJWAL BARLAYA</p>
      </div>
      <img src={Pb} alt="PrajwalBarlaya" />
     <div className="portfolio" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       marginLeft:"40%"
      }}>
      <a href="https://prajwal-b-p-barlaya.github.io/prajwalbarlaya/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}}>
       Prajwal Barlaya Portfolio - Click Here
      </a>
      </div> 
    </>
    </div>
    )
}

export default About
// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About