import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
// import './App.css'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
