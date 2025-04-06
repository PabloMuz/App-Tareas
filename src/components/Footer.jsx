import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { isLoggedIn } = useContext(UserContext);
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  const getMessage = () => {
    if (isLoggedIn) {
      const messages = [
        "💪 ¡Gestiona tus tareas y alcanza tus metas!",
        "📝 Organiza tu día, conquista tu semana.",
        "🚀 Tu productividad comienza aquí.",
        "✅ ¡Cada tarea completada te acerca a tu meta!",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    if (isRegisterPage) {
      const messages = [
        "✨ Crea tu cuenta y empieza a organizar tu vida.",
        "🧠 Tu nueva rutina comienza con un registro.",
        "🌱 Da el primer paso hacia la productividad.",
        "📌 Regístrate para tener todo bajo control.",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    if (isLoginPage) {
      return "👋 ¡Bienvenido de nuevo! Inicia sesión para continuar.";
    }

    return "📋 Inicia sesión para gestionar tus tareas.";
  };

  return (
    <footer className="text-white text-center mt-10 px-4 pb-4 sm:pb-4">
      <p className="text-sm sm:text-base font-medium tracking-wide animate-fade-in">
        {getMessage()}
      </p>
    </footer>
  );
};

export default Footer;
