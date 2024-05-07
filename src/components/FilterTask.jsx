const FilterTask = ({changeFilter, filter}) => {
  return (
    <section className="mx-auto mt-6">
      <div className="flex justify-center gap-5 rounded-md bg-white p-4 dark:bg-gray-700 transition-all duration-500">
        <button 
         className={`${
          filter === "all"
            ? "text-blue-500 hover:text-gray-400 font-semibold"
            : "hover:text-blue-500 text-gray-400 dark:text-gray-200 transition-all duration-500"
        }`}
        onClick={() => changeFilter("all")}>
          Todas
        </button>
        <button
               className={`${
                filter === "active"
                  ? "text-blue-500 hover:text-gray-400 font-semibold"
                  : "hover:text-blue-500 text-gray-400 dark:text-gray-200 transition-all duration-500"
              }`}
          onClick={() => changeFilter("active")}
        >
          Pendientes
        </button>
        <button
               className={`${
                filter === "completed"
                  ? "text-blue-500 hover:text-gray-400 font-semibold"
                  : "hover:text-blue-500 text-gray-400 dark:text-gray-200 transition-all duration-500"
              }`}
          onClick={() => changeFilter("completed")}
        >
          Completadas
        </button>
      </div>
    </section>
  );
};
export default FilterTask;
