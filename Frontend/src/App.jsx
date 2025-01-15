import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/shared/Navbar'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './components/auth/Register'
import { Home } from 'lucide-react';
import Login from './components/auth/Login';

const App = () => {
 const appRouter = createBrowserRouter([
  {
     path: "/",
     
  },
  {
    path: "/register",
    element: <Register />,
  },
  { 
    path: "/login", 
    element: <Login />,
  },

 ])
  return (
    <div>
   <RouterProvider router={appRouter}/>
   <Navbar />
   </div>
  )
}

export default App