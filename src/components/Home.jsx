import React, { useEffect } from 'react'
import Nav from './Nav'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const date = new Date()
    const [todo, settodo] = useState('');
    const [Comtodo, setComtodo] = useState(null);
    const [tasks, settasks] = useState([]);
    const Handelchange = (e) => {
        settodo(e.target.value)
    }
    const fetchTask = async () => {
        try {
            const r = await fetch("http://localhost:3000/");
            const res = await r.json();
            settasks(res)
        } catch (err) {
            alert('There is Problem with Server!')
        }
    }
    const Handelsubmit = async (e) => {
        !todo.trim('') ? alert("You have not added your task") : setComtodo({ id: uuidv4(), todo, isCompleted: false, day: date.toString().split(' ').slice(0, 1).join(), orderby: Date.now() });
        settodo('')
    }
    useEffect(() => { fetchTask() })
    useEffect(() => {
        const sendData = async () => {
            try {
                const data = Comtodo;

                const response = await fetch("http://localhost:3000/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const res = await response.text(); // Use .json() if you're expecting JSON
                console.log(res);

            } catch (error) {
                console.error("Error while posting todo:", error);
            }
        };
        if (Comtodo) {
            sendData();
        }
    }, [Comtodo]);
    // console.log(todo)
    console.log(tasks)

    return (
        <div className='w-screen'>
            <nav className='w-screen'><Nav /></nav>
            <div className="w-4/5  mx-auto min-h-[85vh] m-2 rounded-2xl bg-orange-200 p-5 border">
                <div className="box1">
                    <div className="head head text-2xl font-bold m-1 text-orange-800">Enter your tasks Below!</div>
                    <div className='flex gap-10'>  <input className='border-2 text-orange-800 border-orange-600 w-2/6 p-2 rounded-3xl' type="text" value={todo} placeholder='Enter Your Task' onChange={Handelchange} />
                        <button className=' w-[5rem] rounded-2xl text-white font-medium bg-orange-600' onClick={Handelsubmit}>Add</button></div>
                </div>
                <div className="mytasks">
                    {tasks.map((data) => {
                        return <div className='flex gap-10 m-5 p-4 text-xl font-medium bg-orange-100 rounded-2xl'>
                            <div className="maintask">{data.todo}</div>
                            <button className=' rounded-2xl text-[0.7em] p-2 text-white bg-orange-600'>Update</button>
                            <button className=' rounded-2xl text-[0.7em] p-2 text-white bg-orange-600'>Delete</button>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Home