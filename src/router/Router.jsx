import { Children } from "react";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Reipes/Recipes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
    },
    {
      path: '/recipes/:id',
      element: <Recipes></Recipes>,
      loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      
    }
   
  ]);

 export default router; 