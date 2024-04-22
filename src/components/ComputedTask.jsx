const ComputedTask = ({countItems, clearCompleted}) => {
  return(
    <section className="flex justify-between rounded-b-md bg-white text-gray-400 p-4 ">
    <span>{countItems} Tareas por Completar</span>
    <button onClick={clearCompleted}> Clear Completed</button>
  </section>
  )
};

export default ComputedTask;