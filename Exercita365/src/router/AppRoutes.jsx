import React from 'react'
import App from '../App.jsx'
import '../index.css'
import { createBrowserRouter, Navigate } from 'react-router-dom'


import UsersRegistration from '../pages/UsersRegistration.jsx'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import List from '../pages/List.jsx'
import SearchCEP from '../pages/SearchCEP.jsx'
import LocalRegistration from '../pages/LocalRegistration.jsx'

let isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false

const PrivateRoute = ({children}) => {
  return isAuthenticated ? children : <Navigate to="/login" />
}

const AppRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
     path: '/users/registration',
     element: <UsersRegistration />
  },
  {
     path: '/local-registration',
     element: <LocalRegistration />
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/list/:id",
        element: <List />
      },
      {
        path: "/cep",
        element: <SearchCEP />
      }
    ]
  }
])

export default AppRoutes