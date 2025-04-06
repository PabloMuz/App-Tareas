import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="text-center py-20 animate-fade-in">
      <h1 className="text-6xl font-bold text-white mb-6">404</h1>
      <p className="text-xl text-white mb-8">Página no encontrada</p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        Volver al Inicio
      </Link>
    </section>
  );
};

export default NotFound;
