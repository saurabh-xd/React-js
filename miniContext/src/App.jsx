import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {
  

  return (
   <UserContextProvider>
    <h1> context api</h1>
    <Login></Login>
    <Profile></Profile>
   </UserContextProvider>
  )
}

export default App
