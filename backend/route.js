import express from 'express'
import { todo } from './models/todo.js';
const router=express.Router()

router.get('/',async (req,res)=>{
    const Todo=await todo.find().sort({orderby:-1})
    res.json(Todo)
});
export default router;