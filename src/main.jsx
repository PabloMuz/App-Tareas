import './utils/darkMode.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from "./config/router";

import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)

