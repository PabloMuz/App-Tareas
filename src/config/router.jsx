import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import App from "../App";
import LayoutPrivate from "../layout/LayoutPrivate";
import Login from "../components/Login";  
import Register from "../components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "login",
    element: <LayoutPrivate />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "register",
    element: <LayoutPrivate />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  }
]);
