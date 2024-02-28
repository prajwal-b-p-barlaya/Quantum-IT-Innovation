// import express from 'express'
// // Also from commonjs in type in packagejson can be done in other way
// import mongoose from 'mongoose'
// import cors from 'cors'

// const app=express();
// // creating a server
// app.use(express.json({limit:"30mb",extended:true}))
// // this is restapi
// app.use(express.urlencoded({limit:"30mb",extended:true}))
// app.use(cors());

// app.get('/',(req,res)=>{
//     res.send("This is a Stack Overflow Clone API developed by BP")
// })


// //getting port from the environment

// const PORT=process.env.PORT||5000

// const CONNECTION_URL = "mongodb+srv://admin:<Admin>@cluster0.w704gil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>app.listen(PORT,()=>{console.log('server running on port ${PORT}')}))
// .catch((err)=>console.log(err.message))

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'


//after process for security
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB Connection
// const CONNECTION_URL = "mongodb+srv://admin:Admin@cluster0.w704gil.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_URL = process.env.CONNECTION_URL


// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  

.then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });

app.get('/', (req, res) => {
  res.send("This is a Stack Overflow Clone API developed by BP");
});

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)
// app.post('auth/signup',()=>{

// })
