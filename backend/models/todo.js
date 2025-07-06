import mongoose from "mongoose";
let todoschema=mongoose.Schema({
    id:String,
    todo:String,
    isCompleted:Boolean,
    day:String,
    orderby:{type:Date,default:Date.now}
})
export const todo=mongoose.model('todo',todoschema);