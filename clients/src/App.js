// import logo from './logo.svg';

// import { RouterProvider } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
// import Home from './Pages/Home/Home'
import Navbar from './components/Navbar'

// import LeftSidebar from './components/LeftSidebar/LeftSidebar'
// import RightSidebar from './components/RightSidebar/RightSidebar'
// import HomeMainbar from './components/HomeMainbar/HomeMainbar'
// import Auth from './Pages/Auth/AboutAuth'
import AllRoutes from './AllRoutes'
import {useEffect,useState} from 'react';
import { fetchAllQuestions } from './actions/questions';
import { useDispatch } from 'react-redux';
import {fetchAllUsers} from './actions/users'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);



  // for responsivess added at last 


  
  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };


  return (
    <div className="App">
    


  {/* {SlideIn function used for responsivesnesss not done is lecturer ...... updated last by looking into github } */}





    
    {/* <>
    
    
    
    <Navbar/>
      
      <RouterProvider router={AllRoutes}/>
</> */}
        

  


    <Router>
      
    <Navbar handleSlideIn={handleSlideIn}/>


    {/* <Home/> */}
    
    {/* <LeftSidebar/> */}
    {/* <HomeMainbar/>
    <RightSidebar/> */}


     <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn}/>
    </Router>
 
    </div>
    
  );
}

export default App;






































// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>