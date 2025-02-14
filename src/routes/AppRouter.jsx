import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const router = createHashRouter([  
  {
    path: "/",
    element: (
      <>
        <Header />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "../Recipes",
        element: <Recipes />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
