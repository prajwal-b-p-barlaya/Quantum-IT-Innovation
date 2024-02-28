import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className='home-container-1'>
      {/* <LeftSidebar /> */}
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
     
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Questions

// import React from 'react'

// const Questions = () => {
//   return (
//     <div>Questions</div>
//   )
// }

// export default Questions