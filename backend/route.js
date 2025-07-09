import express from 'express'
import { todo } from './models/todo.js';
const router=express.Router()

router.get('/',async (req,res)=>{
    const Todo=await todo.find({isCompleted:true}).sort({orderby:-1})
    res.json(Todo)
    console.log("Data Fetched")
});

router.get('/activity',async (req,res)=>{
    const Todo=await todo.find({isCompleted:true}).sort({orderby:-1})
    res.json(Todo)
    console.log("Data Fetched")
});
export default router;