import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { todo } from './models/todo.js';
const app=express()
const port=3000;
app.use(cors());
app.use(express.json());
let conn=await mongoose.connect('mongodb://localhost:27017/mytodos');
app.get('/',async(req,res)=>{
    const Todo= await todo.find().sort({orderby:-1});
    res.json(Todo);
})
app.post('/',(req,res)=>{
    // console.log(req.body)
  const mytodo=req.body;
  let Todo=new todo({id:mytodo.id,todo:mytodo.todo,isCompleted:mytodo.isCompleted,day:mytodo.day})
  Todo.save()
  res.send('Done')
})
app.listen(port,()=>{
    console.log('Your servers is running')
})