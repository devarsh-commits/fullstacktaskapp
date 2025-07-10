import React, { useState, useEffect } from 'react';
import Nav from './Nav';

const Activity = () => {
  const [task, settask] = useState([]);

  // State variables for each day's count
  const [mon, setMon] = useState(0);
  const [tue, setTue] = useState(0);
  const [wed, setWed] = useState(0);
  const [thu, setThu] = useState(0);
  const [fri, setFri] = useState(0);
  const [sat, setSat] = useState(0);
  const [sun, setSun] = useState(0);

  const Delay=()=>new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })

  const fetchdata = async () => {
    try {
      const r = await fetch('http://localhost:3000/finished/');
      const res = await r.json();
      settask(res);
    } catch (err) {
      console.log("There is error fetching data", err);
    }
  };

  const fetchDays = (day, arr) => {
    return arr.filter(data => data.day === day);
  };

  const fetchCount = async() => {
    await Delay()
    setMon(fetchDays("Mon", task).length);
    setTue(fetchDays("Tue", task).length);
    setWed(fetchDays("Wed", task).length);
    setThu(fetchDays("Thu", task).length);
    setFri(fetchDays("Fri", task).length);
    setSat(fetchDays("Sat", task).length);
    setSun(fetchDays("Sun", task).length);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (task.length > 0) {
      fetchCount();
    }
  }, [task]);

  // Helper function for bar height
  const getHeight = (count) => `${Math.min(count * 10, 100)}%`;

  return (
    <div>
      <nav className='w-screen'><Nav /></nav>
      <div className="head text-2xl font-bold m-1 text-orange-800 flex justify-center">Weekly Statistics</div>
      <div className='graph border w-[70vw] m-auto h-[70vh] flex justify-center'>
        <div className="axis border w-[90%] h-[90%] border-l-0 border-r-0 border-t-0 flex gap-4 items-end">
          <div className="mon border w-1/7 bg-green-500 transition-all ease-out duration-1000" style={{ height: getHeight(mon) }}></div>
          <div className="tue border w-1/7 bg-blue-500 transition-all ease-out duration-1000" style={{ height: getHeight(tue) }}></div>
          <div className="wed border w-1/7 bg-red-500 transition-all ease-out duration-1000" style={{ height: getHeight(wed) }}></div>
          <div className="thu border w-1/7 bg-yellow-500 transition-all ease-out duration-1000" style={{ height: getHeight(thu) }}></div>
          <div className="fri border w-1/7 bg-purple-500 transition-all ease-out duration-1000" style={{ height: getHeight(fri) }}></div>
          <div className="sat border w-1/7 bg-pink-500 transition-all ease-out duration-1000" style={{ height: getHeight(sat) }}></div>
          <div className="sun border w-1/7 bg-gray-500 transition-all ease-out duration-1000" style={{ height: getHeight(sun) }}></div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
