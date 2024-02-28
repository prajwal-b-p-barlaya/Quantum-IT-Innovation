import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux';
import './HomeMainbar.css';

  const HomeMainbar = () => {
  const location = useLocation();
  const user=1;
  const navigate=useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList)
  
    
  // var questionsList = [
  //   {
  //     _id: '1',
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 2,
  //     questionTitle: 'Which are different top programming languages recently in industry ?',
  //     questionBody: 'It means this',
  //     questionTags: ['javascript', 'R', 'Phython'],
  //     userPosted: 'Preksha',
  //     userId:1,
  //     askedOn: 'jan 1',
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '2',
  //     upVotes: 2,
  //     downVotes:2,
  //     noOfAnswers: 0,
  //     questionTitle: 'Upgraded technologies used for front-end development ?',
  //     questionBody: 'It means this',
  //     questionTags: ['nodejs', 'reactjs', 'mongodb'],
  //     userPosted: 'Prajwal',
  //     userId:1,
  //     askedOn: 'feb 2',
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '3',
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 0,
  //     questionTitle: 'Is C++ good for DSA ?',
  //     questionBody: 'It means this',
  //     questionTags: ['c++', 'c', 'dsa'],
  //     userPosted: 'AKhilesha',
  //     userId:1,
  //     askedOn: 'Dec 3',
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  // ];


   
  // const redirect =() =>{
    

  
  // }


  const checkAuth=()=>{

    // const navigate=useNavigate()
    if(user === null){
alert("Login or Signup to Ask a Question!")
    navigate('/Auth')
  }
  else{
    navigate('/AskQuestion')
  }
    }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}

        {/* <Link to={user === null ? redirect(): '/AskQuestion'} className='ask-btn'>
          Ask Question
        </Link> */}



        {/* // other way */}

        <button onClick={checkAuth} className='ask-btn'>
            Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Please Wait, It's Loading ...</h1>
        ) : (
          <>
            <p>{ questionsList.data.length } questions</p>
      <QuestionList questionsList = {questionsList.data}/>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;

