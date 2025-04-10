// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { serverTimestamp } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import {
  getMessaging,
  getToken,
  onMessage,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// FCM
const messaging = getMessaging(app);

export const requestPermissionAndGetToken = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const currentToken = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration: await navigator.serviceWorker.ready
      });

      if (currentToken) {
        console.log("🔔 Token FCM generado:", currentToken);
        // Puedes enviarlo a Firestore o al backend aquí
      } else {
        console.warn("⚠️ No se generó token, permiso denegado.");
      }
    } else if (permission === 'denied') {
      console.warn("🚫 Permiso de notificaciones denegado por el usuario.");
    } else {
      console.log("🟡 El permiso está en estado default (no aceptado ni denegado).");
    }

  } catch (err) {
    console.error("❌ Error al obtener token FCM:", err);
  }
};


export const listenToForegroundMessages = (callback) => {
  onMessage(messaging, (payload) => {
    console.log("📩 Notificación recibida en foreground:", payload);
    callback(payload);
  });
};

// Auth y login
export const login = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Guardar usuario en Firestore si es nuevo
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      createdAt: serverTimestamp(),
    });
  }

  return user;
};
