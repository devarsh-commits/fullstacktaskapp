import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from 'react'
const Activity = () => {
  const [task, settask] = useState([]);
  const [Moncount,setMoncount]=useState(0)
  const [tuescount,setTuescount]=useState(0)
  const [Wedcount,setscount]=useState(0)
  const [tuescount,setTuescount]=useState(0)
  const [tuescount,setTuescount]=useState(0)
  const [tuescount,setTuescount]=useState(0)
  const [tuescount,setTuescount]=useState(0)
  const fetchdata = async () => {
    try {
      const r = await fetch('http://localhost:3000/finished/');
      const res = await r.json();
      settask(res);
      // console.log(task)
    } catch (err) {
      console.log("There is error fetching data", err)
    }
  }
  useEffect(() => fetchdata, [])
  const createBars=async()=>{
    task.map((data)=>{
      return <div></div>
    })
  }

  return (
    <div>
      <nav className='w-screen'><Nav /></nav>
      <div className="head head text-2xl font-bold m-1 text-orange-800  flex justify-center">Weekly Statistics</div>
      <div className='graph border w-[70vw] m-auto h-[70vh] flex justify-center '>
        <div className="axis border w-[90%] h-[90%] border-l-0 border-r-0 border-t-0 flex gap-4">
           <div className="boxs"></div>
        </div>
      </div>
    </div>
  )
}

export default Activity