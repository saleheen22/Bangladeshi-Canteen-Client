import { Children } from "react";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Reipes/Recipes";
import NotFound from "../components/NotFound/NotFound";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
    },
    {
      path: '/recipes/:id',
      element: <Recipes></Recipes>,
      loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      
    },
    {
      path: "/blog",
      element: <Blog></Blog>
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/registration",
      element: <Registration></Registration>
    }
    
   
  ]);

 export default router; 