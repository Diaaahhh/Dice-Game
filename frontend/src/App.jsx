import React from 'react'
import HomePage from './Components/Home/HomePage.jsx'
import PlayGround from './Components/Playground/Playground.jsx'
import Navbar from './Components/Test/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Components/Test/Profile.jsx'

const App = () => {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><HomePage/></>
    },
    {
      path: "/playground",
      element: <><Navbar/><PlayGround/></>
    },
    {
      path: "/user/:userName",
      element: <><Navbar/><Profile/></>
    }
  ])
  return (
    <div>
      {/* <HomePage/> */}
      {/* <PlayGround/> */}
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
