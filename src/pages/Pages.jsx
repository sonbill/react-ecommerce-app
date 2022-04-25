import React from 'react'
import Home from './Home'
import Register from './Register'
import Login from './Login'

import { Routes, Route } from 'react-router-dom';
function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Pages