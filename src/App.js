import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Blog from "./pages/Home/Blog";
import ContactMe from "./pages/Home/ContactMe";
import Projects from "./pages/Home/Projects";
import ProjectsDetails from "./pages/Home/ProjectsDetails";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/details",
          element: <ProjectsDetails></ProjectsDetails>,
        },
        {
          path: "/contact",
          element: <ContactMe></ContactMe>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div className="max-w-screen-xl mx-auto App shadow-2xl">
      <RouterProvider router={route}>
        <Main></Main>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
