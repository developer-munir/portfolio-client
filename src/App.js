import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
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
      ],
    },
  ]);
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen shadow-2xl">
      <RouterProvider router={route}>
        <Main></Main>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
