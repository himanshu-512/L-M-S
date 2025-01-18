import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/shared/Navbar'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './components/auth/Register'
import Home from './components/Home';
import Login from './components/auth/Login';
import { Toaster } from 'sonner';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    
      <Toaster position="top-center" />
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App