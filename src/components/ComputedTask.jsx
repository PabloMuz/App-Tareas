const ComputedTask = ({countItems, clearCompleted}) => {
  return(
    <section className="flex justify-between rounded-b-md bg-white text-gray-400 p-4 dark:bg-gray-700 transition-all duration-500">
    <span className="dark:text-gray-200 transition-all duration-500">{countItems} Tareas por Completar</span>
    <button className="dark:text-gray-200 transition-all duration-500" onClick={clearCompleted}> Clear Completed</button>
  </section>
  )
};

export default ComputedTask;