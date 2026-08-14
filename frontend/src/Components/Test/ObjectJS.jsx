import React from 'react'

const objectJS = () => {
  const person1= {
        name: "Dia",
        age: 26,
        sayHello: ()=>{
          console.log(`hi from Dia`);
          
        }
      }
  return (
    <div>
      
      {/* for "<StrictMode> <App/> </StrictMode>" in man.jsx the "const objectJS = () => {}" runs twice and so the output is shown twice.  */}
      
       {person1.sayHello()}

    </div>
  )
}

export default objectJS
