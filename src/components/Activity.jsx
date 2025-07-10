import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from 'react'
const Activity = () => {
  const [task, settask] = useState([]);
  const [Moncount, setMoncount] = useState(0);
  const [Tuescount, setTuescount] = useState(0);
  const [Wedcount, setWedcount] = useState(0);
  const [Thurscount, setThurscount] = useState(0);
  const [Fricount, setFricount] = useState(0);
  const [Satcount, setSatcount] = useState(0);
  const [Suncount, setSuncount] = useState(0);

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
  // function to seperate days


  // const Setdays = async () => {
  //   const fetchdata = async () => {
  //     let monData = await fetchDays("Mon", task);
  //     setMoncount(monData.length);

  //     const tuesData = await fetchDays("Tue", task);
  //     setTuescount(tuesData.length);

  //     const wedData = await fetchDays("Wed", task);
  //     setWedcount(wedData.length);

  //     const thursData = await fetchDays("Thu", task);
  //     setThurscount(thursData.length);

  //     const friData = await fetchDays("Fri", task);
  //     setFricount(friData.length);

  //     const satData = await fetchDays("Sat", task);
  //     setSatcount(satData.length);

  //     const sunData = await fetchDays("Sun", task);
  //     setSuncount(sunData.length);
  //   };

  // }

  useEffect(() => {
    fetchdata();
    // Setdays()
  }, [])
  const fetchDays = (day, arr) => {
    let newarr = arr.filter((data) => {
      return data.day === day;
    })
    return newarr;
  }
  async function dayscounter(params) {
    let mon = (await fetchDays("Mon", task)).length;

    let tue = (await fetchDays("Tue", task)).length;
    let wed = (await fetchDays("Wed", task)).length;
    let thu = (await fetchDays("Thu", task)).length;
    let fri = (await fetchDays("Fri", task)).length;
    let sat = (await fetchDays("Sat", task)).length;
    let sun = (await fetchDays("Sun", task)).length;

  }

  console.log('the value', mon)
  return (
    <div>
      <nav className='w-screen'><Nav /></nav>
      <div className="head head text-2xl font-bold m-1 text-orange-800  flex justify-center">Weekly Statistics</div>
      <div className='graph border w-[70vw] m-auto h-[70vh] flex justify-center '>
        <div className="axis border w-[90%] h-[90%] border-l-0 border-r-0 border-t-0 flex gap-4">
          <div className="mon border w-1/7"></div>
          <div className="tue border w-1/7"></div>
          <div className="wed "></div>
          <div className="thurs "></div>
          <div className="fri "></div>
          <div className="sat "></div>
          <div className="sun "></div>
        </div>
      </div>
    </div>
  )
}

export default Activity