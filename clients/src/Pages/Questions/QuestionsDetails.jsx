import React,{useState} from 'react'
import {Link,useParams,useNavigate,useLocation} from 'react-router-dom'
import upvote from '../../components/assets/sort-up.svg'
import downvote from '../../components/assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
import { useSelector,useDispatch } from 'react-redux'
import { postAnswer } from '../../actions/questions'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import {deleteQuestion,voteQuestion} from '../../actions/questions'


const QuestionsDetails = () => {
    const {id} = useParams()
  const questionsList = useSelector((state)=>state.questionsReducer)
    //  console.log(questionsList)

    //   console.log(id)
  // var questionsList = [
  //   {
  //     _id: '1',
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 2,
  //     questionTitle: 'Which are different top programming languages recently in industry ?',
  //     questionBody: 'It means this',
  //     questionTags: 'javascript', 'R', 'Phython',
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


  //inorder to clear the answer after posting
  const [Answer,setAnswer]= useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()
const User= useSelector((state)=>(state.currentUserReducer))
const location=useLocation()
const url='http://localhost:3000'

const handlePostAns=(e,answerLength)=>{
    e.preventDefault()
    if(User ===null){
        alert('Login or SignUp to Answer a Question')
        navigate('/Auth')

    }
    else{
        if(Answer ===''){
            alert('Please Do Enter an Answer Before Hitting Submit Button!')
        }
        else{
            dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))

            setAnswer("");
        }
    }

}

const handleShare = ()=>{
copy(url+location.pathname)
alert('Copied URL: '+url+location.pathname)
}

const handleDelete = () =>{
    dispatch(deleteQuestion(id,navigate));
}

const handleUpVote=()=>{
    dispatch(voteQuestion(id,'upVote',User.result._id))
}

const handleDownVote=()=>{
    dispatch(voteQuestion(id,'downVote',User.result._id))
}
 
  return (
    <div className='question-details-page'>
      {questionsList.data === null ? (
        <h1>Please wait, It's Loading ...</h1>
      ) :
    (
        <>{
            questionsList.data.filter(question=> question._id===id).map(question=>
                <div key={question._id}>
                   
                   {/* creating a huge container */}
                   
                     <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container-2'>
                     
                          <div className="question-votes">

                            <img src={upvote} alt="up" width='18' class="votes-icon" onClick={handleUpVote}/>
                            <p>{question.upVote.length-question.downVote.length}</p>
                            <img src={downvote} alt="down" width='18' class="votes-icon" onClick={handleDownVote}/>
                          </div>
<div style={{width:"100%"}}>

<p className='question-body'>
    {question.questionBody}
</p>

<div className="question-details-tags">
    {
        question.questionTags.map((tag)=>(
            <p key={tag}>
                  {tag}
            </p>
        ))
    }
</div>
<div className="question-actions-user">
    <div>
        <button type='button' onClick={handleShare}>Share</button>
        {
                User?.result?._id === question?.userId && (
                    <button type="button" onClick={handleDelete}>Delete</button>
                )
            }</div>
    <div>
        <p>
            asked {moment(question.askedOn).fromNow()}
        </p>
        <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
        <Avatar backgroundColor="Orange" px='8px'py='5px'>
            { 
                question.userPosted.charAt(0).toUpperCase()
            }
        </Avatar>
        <div>
            {question.userPosted}
        </div>
        </Link>
    </div>
</div>
</div>
                        </div>

                    </section>
{
    question.noOfAnswers!== 0 && (
        <section>
            <h4>
               {question.noOfAnswers} answers
            </h4>
<DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
        </section>
    )
}

<section className='post-ans-container'>
    <h3>
        Your Answer
    </h3>
    <form onSubmit={ (e) => {handlePostAns(e,question.answer.length)}}>
        <textarea name="" id="" cols="30" rows="10" value={Answer} onChange={e => setAnswer(e.target.value)}></textarea>
   
   <br>
   </br>

   <input type="Submit" className='post-ans-btn' value='Post Your Answer'/>
    </form>

    <p>
        Browse other Question tagged
     {  question.questionTags.map((tag) => (
            <Link to='/Tags' key={tag} class='ans-tags'>
                {tag}
            </Link>
                  
                  
      ))
     }
     or{
        <Link to='/AskQuestion' style={{textDecoration:"none",color:'#009dff'}}>
            Ask your own question.
        </Link>
     }
    </p>

</section>
                </div>
                )
            
            
            /* Render your content here */}</>
      )}
    </div>
  );
};

export default QuestionsDetails