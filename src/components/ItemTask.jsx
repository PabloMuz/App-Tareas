import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const ItemTask = ({ task, removeTask, updateTask }) => {
  const { id, title, completed, priority, date } = task;

  return (
    <article className="flex flex-row items-center justify-between  w-full gap-4 border-b dark:bg-gray-700 transition-all duration-500">

      <div className="flex flex-row w-3/4 gap-2">
        <button
          className={`border-2 rounded-full h-5 mt-1 w-5 flex-none ${
            completed
              ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block"
          }`}
          onClick={() => updateTask(id)}
        >
          {completed && <CheckIcon />}
        </button>
        <p
          className={`text-gray-600 dark:text-gray-200 transition-all duration-500 grow ${
            completed && "line-through"
          } `}
        >
          {title}
        </p>
      </div>
      <div className="flex flex-col justify-end gap-1 items-end min-w-fit">
        
         {/* Display the date of the task */}
         <span
          className={`${completed && "line-through"} ${
            date
              ? "flex bg-green-400 text-white dark:text-black px-2 py-1 rounded-md dark:bg-green-600 text-sm w-100px"
              : "hidden"
          }`}
        >
          {date}
        </span>

        {/* Show whether the task has priority */}
        <span
          className={`bg-yellow-700 ${completed && "line-through"} ${
            priority
              ? "flex bg-orange-400 text-white dark:text-black px-2 py-1 rounded-md dark:bg-yellow-600"
              : "hidden"
          }`}
        >
          Prioridad
        </span>
      </div>
<div className="flex  justify-center w-fit">
      <button
          className="fill-[#494C6B] dark:fill-white transition-all duration-500"
          onClick={() => removeTask(id)}
        >
          <CrossIcon />
        </button>
        </div>
    </article>
  );
};

export default ItemTask;
