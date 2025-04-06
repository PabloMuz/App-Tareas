import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import App from "../App";
import LayoutPrivate from "../layout/LayoutPrivate";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound"; // 👈 Asegúrate de crear este componente

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "*", // 👈 Ruta 404 dentro del layout root
        element: <NotFound />,
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
  },
]);
