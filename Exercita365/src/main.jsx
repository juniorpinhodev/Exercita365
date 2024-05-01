import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UsersRegistration from './pages/UsersRegistration.jsx'


const routes = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          children: [
               {
                    path: '/users/registration',
                    element: <UsersRegistration />
               }
          ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={routes}>    
     </RouterProvider>
)
