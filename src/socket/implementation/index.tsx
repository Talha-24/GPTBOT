import React from 'react'
import { Routes, Route } from "react-router-dom"
import Regsiter from './register'
import Dashboard from './dashboard'
import Login from './login'
import ChatArea from './chat-area'
const Home: React.FC = () => {



  return (
    <div className='h-screen w-full'>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Regsiter />} path="/register" />
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<ChatArea />} path='/chat-area' />
      </Routes>
    </div>
  )
}

export default Home
