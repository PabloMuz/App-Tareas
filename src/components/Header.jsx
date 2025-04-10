import { useContext, useEffect, useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import Moon from "./icons/MoonIcon";
import Sun from "./icons/SunIcon";
import UserIcon from "./icons/UserIcon";
import HomeIcon from "./icons/HomeIcon";
import RegisterIcon from "./icons/RegisterIcon";
import LogoutIcon from "./icons/LogoutIcon";
import { UserContext } from "../context/UserContext";
import { logOut } from "../config/firebase";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { user, isLoggedIn, setUser } = useContext(UserContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="container mx-auto px-4 md:max-w-xl">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-white pt-4 text-2xl font-bold tracking-widest">
          {isLoginPage
            ? "Iniciar Sesión"
            : isRegisterPage
            ? "Registro"
            : "Tareas"}
        </h1>

        <div className="flex items-center gap-3 pt-4">
          {/* Botón dark mode */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <Sun className="fill-white" />
            ) : (
              <Moon className="fill-white" />
            )}
          </button>

          <div className="w-px h-6 bg-white opacity-50" />

          {/* Botón dinámico */}
          {isLoggedIn ? (
            <>
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                  title={user.displayName || "Usuario"}
                />
              )}
              <span className="text-white font-medium hidden sm:inline">
                {user?.displayName?.split(" ")[0]}
              </span>

              <div className="w-px h-6 bg-white opacity-50" />

              <button
                onClick={handleLogout}
                title="Cerrar sesión"
                className="p-1 rounded-md transition-all hover:scale-110"
              >
                <LogoutIcon className="fill-white w-8 h-8" />
              </button>
            </>
          ) : (
            <>
              {isLoginPage && (
                <>
                  <NavLink
                    to="/"
                    title="Ir al Home"
                    className="p-1 rounded-md transition-all hover:scale-110"
                  >
                    <HomeIcon />
                  </NavLink>
                  <div className="w-px h-6 bg-white opacity-50" />
                  <NavLink
                    to="/register"
                    title="Registrarse"
                    className="p-1 rounded-md transition-all hover:scale-110"
                  >
                    <RegisterIcon />
                  </NavLink>
                </>
              )}

              {isRegisterPage && (
                <NavLink
                  to="/"
                  title="Ir al Home"
                  className="p-1 rounded-md transition-all hover:scale-110"
                >
                  <HomeIcon />
                </NavLink>
              )}

              {!(isLoginPage || isRegisterPage) && (
                <NavLink
                  to="/login"
                  title="Ir a Login"
                  className="p-1 rounded-md transition-all hover:scale-110"
                >
                  <UserIcon className="fill-white w-9 h-9 translate-y-[5px]" />
                </NavLink>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
