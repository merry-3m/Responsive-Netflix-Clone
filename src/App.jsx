import { useEffect, useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FireBase/FireBase'
// `

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=> {
      if(user){
        console.log("Log in ")
        navigate("/")
      }else{
        console.log("Log out")
        navigate("/login")
      }

    })
  },[])
  return (
    <>
      <ToastContainer theme='dark' />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    
    
     </>
  )
}

export default App
