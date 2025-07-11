import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Post from './components/pages/Post'
import PostWithComment from './components/pages/PostWithComment'
// import './App.css'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Post/>} />
        <Route path="/postWithComment" element={<PostWithComment/>} />
      </Routes>
    </>
  )
}

export default App
