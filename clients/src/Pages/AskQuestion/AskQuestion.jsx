import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// import {useHistory} from 'react-router-dom'

// import {useNavigate} from 'react-router-dom'
import './AskQuestion.css'
import {askQuestion} from '../../actions/questions'


const AskQuestion = () => {

  const[questionTitle,setQuestionTitle]=useState('')
  const[questionBody,setQuestionBody]=useState('')
  const[questionTags,setQuestionTags]=useState('')

const dispatch = useDispatch()
const User=useSelector((state)=>(
  state.currentUserReducer
))

const navigate = useNavigate()

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   // console.log({questionTitle,questionBody,questionTags})

  //   dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result?._id},navigate))
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
       
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId:User?.result?._id
            // remember this very clearly , using userid is most important now think why .. you have doenalsready mistake so 
               
            },
            navigate
            )
            );
          } else alert("Please enter all the fields");
        } else alert("Please go to Login and get Register or Log In Yourself for performing activities in tis website!");
        // navigate('/Auth')
      };

  const handleEnter=(e)=>{
    if(e.key === 'Enter'){
      setQuestionBody(questionBody+"\n")
    }
  }

//   const user=null;
//   const navigate=useNavigate()
// const redirect =() =>{
//   alert("Login or Signup to Ask a Question!")
//   navigate('/Auth')
// }

  return(
   
    
   <div className="ask-question">
       <div className="ask-ques-container">
       <h1>Ask a Public Question</h1>
       <form onSubmit={handleSubmit}>
        <div className="ask-form-container">
          <label htmlFor="ask-ques-title">
            <h4>Title</h4>
            <p>Dear, Please be specific and imagine you are asking a question to another person</p>
         <input type="text" id='ask-ques-title'onChange={(e)=>{
          setQuestionTitle(e.target.value)

         }}
         
         placeholder=' e.g is there advantages of using c++ for dsa' />

         
          </label>

          <label htmlFor="ask-ques-body">
            <h4>Body</h4>
            <p>Include all the information someone would need to answer your question</p>
   <textarea name='' id='ask-ques-body' onKeyPress={handleEnter} onChange={(e)=>{
          setQuestionBody(e.target.value)

         }} cols='30' rows='10'/>
         {/* <input type="text" id='ask-ques-title' /> */}

         
          </label>

          <label htmlFor="ask-ques-tags">
            <h4>Tags</h4>
            <p>Add up to 5 tags to describe what your question is about!</p>
         <input type="text" id='ask-ques-tags' onChange={(e)=>{
          setQuestionTags(e.target.value.split(" "))

         }}placeholder=' e.g (Java or c++)' />

         
          </label>




        </div>


        <input class="review-btn " type="submit" value='Review your question'/>
       </form>
        </div>   
    </div>
   

  )
}

export default AskQuestion