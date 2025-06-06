import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutPrivate = () => {
  return (
    <div className="bg-no-repeat bg-contain pt-5 min-h-fill-available bg-gray-300 transition-all duration-600 dark:bg-gray-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-blue-900 dark:via-gray-600 dark:to-pink-900">
      <Header />
      <main className="container overflow-hidden mx-auto px-4 mt-6 rounded-t md:max-w-xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPrivate;
