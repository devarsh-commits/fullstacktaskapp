import React, { useEffect,useState } from 'react'
import { Todocontext } from './Context/todocontext';
import Nav from './Nav'
const Completed = () => {
  const [task,settask]=useState([])
   const fetchTask = async () => {
        try {
            const r = await fetch("http://localhost:3000/finished/");
            const res = await r.json();
            settask(res)
            console.log(task)
          
        } catch (err) {
            alert('There is Problem with Server!',err)
        }
    }
    useEffect(()=>{fetchTask()},[]);
  return (
    <div>
            <nav className='w-screen'><Nav/></nav>
           < div className="w-4/5  mx-auto min-h-[85vh] m-2 rounded-2xl bg-orange-200 p-5 border"> 
            <div className="head head text-2xl font-bold m-1 text-orange-800  flex justify-center">My Completed Tasks</div>
            <div>
                {task===null?<div>There is No Completed Task</div>:task.map((Data)=>{
                  return <div className='flex gap-10 m-5 p-4 text-xl font-medium bg-orange-100 rounded-2xl border justify-center '>
                    <div className='Task line-through'>{Data.todo}</div>
                  </div>
                })}
             </div></div>
          
    </div>
  )
}

export default Completed