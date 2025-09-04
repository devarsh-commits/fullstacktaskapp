import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { todo } from './models/todo.js';
import router from './route.js';
import activity from './activity.js';
const app=express()
const port=3000;
app.use(cors());
app.use(express.json());
let conn=await mongoose.connect('mongodb://localhost:27017/mytodos');
app.use('/finished',router)
// app.use('/activity',activity);
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
app.put('/:id',async(req,res)=>{
   const updatedtask=await todo.findByIdAndUpdate(
    req.params.id,
    {$set:req.body},
    {new:true}
   );
   res.json(updatedtask);
})
app.delete('/:id',async(req,res)=>{
    await todo.findByIdAndDelete(req.params.id);
    res.send("Task deleted Successfully!")
})
app.listen(port,()=>{
    console.log('Your servers is running')
})