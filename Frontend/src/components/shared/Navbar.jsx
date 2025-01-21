import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const islogin = false;
  return (
    <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' >
     <div className='pl-8 flex items-center gap-4'>
      <Link to="/"><h1 className='font-extrabold space-x-1  text-2xl '>LMS LEARN</h1></Link>
      <Button  className="border-2 border-black rounded-xl bg-gray-800 font-semibold text-white" >Explore Courses</Button>
     </div>
     <div  className='pr-8 flex items-center gap-4'>
      <h1 className='font-extrabold space-x-1 text-2xl'>My Courses</h1>
      {
        islogin ? <Button className="border-2 border-black rounded-xl font-semibold text-white" >Logout</Button> : <div className='pl-8 flex items-center gap-4'><Button className="border-2 border-black rounded-xl font-semibold bg-red-500 text-white" >Sign In</Button>
      <Button className="border-2 border-black rounded-xl font-semibold text-white" >Sign Up</Button></div>
      }
     </div> 
    </div>
  )
}

export default Navbar