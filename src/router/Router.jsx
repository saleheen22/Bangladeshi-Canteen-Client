import { Children } from "react";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Reipes/Recipes";
import NotFound from "../components/NotFound/NotFound";
import Blog from "../components/Blog/Blog";

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
    
   
  ]);

 export default router; 