import React, { useEffect,useState } from 'react'
import { Todocontext } from './Context/todocontext';
import Nav from './Nav'
const Completed = () => {
  const [Comtasks,setComtasks]=useState();
   const fetchTask = async () => {
        try {
            const r = await fetch("http://localhost:3000/finished/");
            const res = await r.json();
            setComtasks(res)
        } catch (err) {
            alert('There is Problem with Server!')
        }
    }
    useEffect(()=>fetchTask,[]);
    console.log(Comtasks)
  return (
    <div>
            <nav className='w-screen'><Nav/></nav>
             <div>
              {Comtasks.map(data=>{return})}
             </div>
          
    </div>
  )
}

export default Completed