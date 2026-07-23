import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to= "/">Home</Link> <br /> <br />
      <Link to="/playground">Playground</Link> <br /> <br />
      <Link to="/user/userName">profile</Link> <br />
    </div>
  )
}

export default Navbar
