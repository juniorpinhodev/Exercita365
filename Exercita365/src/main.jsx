import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Navigate } from 'react-router-dom'
import { UsersContextProvider } from './context/UsersContext.jsx'
import Routes  from './router/AppRoutes.jsx'


let isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false

const PrivateRoute = ({children}) => {
  return isAuthenticated ? children : <Navigate to="/login" />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersContextProvider>
    <RouterProvider router={Routes}>
    </RouterProvider>
  </UsersContextProvider>
);