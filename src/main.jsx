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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('✅ Service Worker registrado:', registration);
      })
      .catch((err) => {
        console.error('❌ Error registrando Service Worker:', err);
      });
  });
}
