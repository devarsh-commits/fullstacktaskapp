import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-[100%] text-white font-medium p-2 bg-orange-600 flex gap-5 mx-auto'>
            <div className="logo w-2/4 flex justify-center text-2xl">Quick Takser</div>
            <nav className='border w-2/4 rounded-2xl'>
                <ul className='flex justify-around text-[1em]'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/finished'}>Completed</NavLink>
                <NavLink to={'/activity'}>Stats</NavLink>
            </ul>
            </nav>
        </div>
    )
}

export default Nav