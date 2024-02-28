import React from 'react'
// import { createBrowserRouter } from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import About from './components/About'
import Questions from './Pages/Questions/Questions'
import DisplayQuestions from './Pages/Questions/DisplayQuestions'
import Tags  from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
// import QuestionsDetails from './Pages/Questions/QuestionsDetails'

// const AllRoutes = createBrowserRouter([
//   {
//     path:'/',element:<Home/>

//   },

//   {
//     path:'/Auth',element:<Auth/>

//   },

//   {
//     path:'/Questions',element:<Questions/>

//   },
//   {
//     path:'/About',element:<About/>

//   }

// ])


const AllRoutes=({ slideIn, handleSlideIn })=>
 {
  return (
   <Routes>
 <Route path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    {/* <Route path='/' element={Home}></Route> */}
    {/* <Route exact path='/' element={<Home/>}/> */}
    <Route path='/Auth' element={<Auth/>}/>
    <Route path='/Questions'element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/AskQuestion'element={<AskQuestion/>}/>
    <Route path='/Questions/:id'element={<DisplayQuestions slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    <Route path='/Tags'element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    <Route path='/Users'element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    <Route path='/Users/:id'element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
   
    



  {/* {SlideIn function used for responsivesnesss not done is lecturer ...... updated last by looking into github } */}




    {/* <Route path='/QuestionsDetails'element={<QuestionsDetails/>}/> */}

    </Routes>
  )
  }
export default AllRoutes