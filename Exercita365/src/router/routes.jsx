import { createBrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Login from '../pages/Login';
import UsersRegistration from '../pages/UsersRegistration';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import SearchCEP from "../pages/SearchCEP";
import PrivateRoute from "../components/PrivateRoute";


const routes = createBrowserRouter([
    {
     path: "/",
     element: <App />,
     children: [
      {
       path: "/",
       element: <Login />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/users/registration",
        element: <UsersRegistration />
      }, 
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
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
   ]);
   
   export default routes;