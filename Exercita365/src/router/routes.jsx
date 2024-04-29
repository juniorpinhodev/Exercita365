import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from '../pages/Login';


const routes = createBrowserRouter([
    {
     path: "/",
     element: <App />,
     children: [
      {
       path: "/",
       element: <Login />
      },
     ]
    }
   ]);
   
   export default routes;