import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const isLoggeIn = true

export const ProtectedRoutes = () => {
  return isLoggeIn ? <Outlet /> : <Navigate to='/login' replace />
}
