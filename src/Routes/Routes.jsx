import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/News";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import Doctor from "../Pages/Doctor/Doctor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipe/:recipeId",
        element: <RecipeDetails />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/doctor",
        element: <Doctor />,
      },
    ],
  },
]);
