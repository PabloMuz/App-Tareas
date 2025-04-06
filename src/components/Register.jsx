import { useState, useEffect } from "react";
import { register } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import LoadingScreen from "../components/LoadingScreen";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, loading } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentialUser = await register({ email, password });
      console.log("Registro exitoso:", credentialUser);
    } catch (error) {
      console.log("Error al registrarse:", error);
    }

    setEmail("");
    setPassword("");
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex justify-center items-center mt-12 px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-500">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Crea tu cuenta
        </h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="nombre@correo.com"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-sm rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Crea una contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Mínimo 6 caracteres"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-sm rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
