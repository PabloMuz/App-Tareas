/* eslint-disable no-undef */
// Este archivo se ejecuta fuera del contexto React (Vanilla JS puro)

importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDzi4YCSINz1QHsC0jTSrbSKZN2cLt5y1s",
  authDomain: "task-app-public.firebaseapp.com",
  projectId: "task-app-public",
  storageBucket: "task-app-public.appspot.com",
  messagingSenderId: "762666384119",
  appId: "1:762666384119:web:a22d58e25c13d5e20271f2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Mensaje recibido en background:", payload);
  const { title, body } = payload.notification;

  self.registration.showNotification(title, {
    body,
    icon: "/icons/icon-192x192.png", // Usa el ícono que ya tenés
  });
});
