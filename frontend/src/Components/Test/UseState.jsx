import React, { useState } from 'react'
const UseState = () => {
  const [bites, setBites]= useState(0)
  return (
    <div>
      You gave me {bites} bites.
      <button onClick={()=>{setBites(bites+1)}}>Bite more</button>
    </div>
  )
}

export default UseState
