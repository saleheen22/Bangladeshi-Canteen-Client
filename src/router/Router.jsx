import { Children } from "react";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Reipes/Recipes";
import NotFound from "../components/NotFound/NotFound";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
    },
    {
      path: '/recipes/:id',
      element: <PrivateRouter><Recipes></Recipes></PrivateRouter>,
      loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-sal-muntasaleheen-gmailcom.vercel.app/recipes/${params.id}`)
      
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