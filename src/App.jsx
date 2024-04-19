import React from 'react'
import Users from './Components/User/Users'
import Colorchange from './Components/Colorchange/Colorchange'

function App() {

  const day = {
    Greet : "Welcome"
  }


  return (
    <>
      <h1 className='text-center text-3xl font-bold 
      text-indigo-500'>Welcome to React-Redux</h1>
    <Users props={day}/>
    <Colorchange/>
    </>
  )

}

export default App
