import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./pages/Signup";
import Signin from "./pages/Signin";
import Contact from "./pages/Contact";
import About from "./pages/About";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <Signin /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return element;
};

export default ProjectRoutes;
