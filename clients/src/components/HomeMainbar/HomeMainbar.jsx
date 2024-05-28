import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomeMainbar.css';

  const HomeMainbar = () => {
  const location = useLocation();
  const user=1;
  const navigate=useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)
  


  const checkAuth=()=>{

    // const navigate=useNavigate()
    if(user === null){
alert("Login or Signup to Ask a Question!")
    navigate('/Auth')
  }
  else{
    navigate('/UsersList')
  }
    }

  return (
    <div className='topp'>
    <b> Quantum IT Innovation Assignment</b> 
    </div>
  );
};

export default HomeMainbar;

