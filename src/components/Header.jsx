import { useEffect, useState } from "react";
import Moon from "./icons/MoonIcon";
import Sun from "./icons/SunIcon";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  
  return (
    <header className="container mx-auto px-4 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white pt-4 text-2xl font-bold tracking-widest">
          Tareas
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Sun className="fill-white" />
          ) : (
            <Moon className="fill-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;