import React from 'react'
import { Home, Login } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoutes } from './utils/Hoc'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />} />
      <Route path='' element={<ProtectedRoutes />}>
        <Route path='/home' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
}

export default App
