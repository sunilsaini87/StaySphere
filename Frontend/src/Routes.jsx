import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./pages/Signup";
import Signin from "./pages/Signin";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <Signin /> },
  ]);

  return element;
};

export default ProjectRoutes;
