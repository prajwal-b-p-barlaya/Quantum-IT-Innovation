import Questions from '../models/Questions.js'
import mongoose from 'mongoose'

export const AskQuestion = async(req,res)=>{

const postQuestionData =req.body;
const postQuestion = new Questions(postQuestionData);
try{
    await postQuestion.save();
    res.status(200).json("Posted a question successfully !")
}
catch(error){
    console.log(error)
    res.status(409).json("Could not post a new question")

}

}

export const getAllQuestions = async(req,res) =>{
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
        }
    catch (error) 
    {
        res.status(404).json({message:error.message});
        
    }
}

export const deleteQuestion = async (req,res)=>{
    const{id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question Unavailable ...! ')
    }
    try {
        
        await Questions.findByIdAndDelete(_id)
        res.status(200).json({message:"Succesfully Deleted ...!"})
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteAnswer = async ( req,res) =>{
    const {id:_id} = req.params;
    const{answerId,noOfAnswers} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question Unavailable ...! ')
    }

    if(!mongoose.Types.ObjectId.isValid(answerId)){
        return res.status(404).send('Answer Unavailable ...! ')
    }

    updateNoOfQuestions(_id,noOfAnswers)
    try{
await Questions.updateOne({_id},{$pull:{'answer':{_id:answerId}}})

res.status(200).json({message:"Succesfully Deleted ..."})
//used to pull pecific answer from array of answers
}
    
    catch(error){

  res.status(405).json(error)

    }

}

export const voteQuestion = async(req,res)=>{
    const{id:_id} = req.params;
    const{value,userId}=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question Unavailable ...! ')
    }

    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upVote.findIndex((id)=>id === String(userId))
        const downIndex = question.downVote.findIndex((id)=> id === String(userId))

        if(value === 'upVote'){
            if(downIndex !== -1){
                question.downVote = question.downVote.filter((id)=> id !==String(userId))
            }
            if(upIndex === -1){
                question.upVote.push(userId)
            }
            else{
                question.upVote = question.upVote.filter((id)=>id!== String(userId))
            }
        }

      else if(value === 'downVote'){
            if(upIndex !== -1){
                question.upVote = question.upVote.filter((id)=> id !==String(userId))
            }
            if(downIndex === -1){
                question.downVote.push(userId)
            }
            else{
                question.downVote = question.downVote.filter((id)=>id!== String(userId))
            }
        }
 await Questions.findByIdAndUpdate(_id,question)
 res.status(200).json({message:"Voted Succesfully ...!"})


    } catch (error) {
        res.status(404).json({message:"id not found"})
    }
}