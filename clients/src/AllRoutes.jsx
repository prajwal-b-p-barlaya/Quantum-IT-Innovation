import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Tags  from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'


const AllRoutes=({ slideIn, handleSlideIn })=>
 {
  return (
   <Routes>
 <Route path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>

    <Route path='/Auth' element={<Auth/>}/>
    <Route path='/Tags'element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    <Route path='/Users'element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    <Route path='/Users/:id'element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
   

    </Routes>
  )
  }
export default AllRoutes