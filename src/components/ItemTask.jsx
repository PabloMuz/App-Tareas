import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const ItemTask = ({ task, removeTask, updateTask }) => {
  const { id, title, completed, priority, date } = task;

  return (
    <article className="flex gap-4 border-b dark:bg-gray-700 transition-all duration-500">
      <button
        className={`border-2 rounded-full h-5 w-5 flex-none ${
          completed
            ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => updateTask(id)}
      >
        {completed && <CheckIcon />}
      </button>
      <p className={`text-gray-600 dark:text-gray-200 transition-all duration-500 grow ${completed && "line-through"} `}>
        {title}
      </p>

      {/* Mostrar la fecha de la tarea */}
      <span className={`${completed && "line-through"} ${
          date
            ? "flex bg-green-400 px-3 rounded-lg text-gray-900 text-sm "
            : "hidden"
        }`}>{date}</span>

      {/* Mostrar si la tarea tiene prioridad */}
      <span className={`bg-yellow-400 ${completed && "line-through"} ${
          priority
            ? "flex bg-yellow-400 px-3 rounded-lg text-gray-900 text-sm "
            : "hidden"
        }`}>Prioridad</span>

      <button className="fill-[#494C6B] dark:fill-white transition-all duration-500" onClick={() => removeTask(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default ItemTask;
