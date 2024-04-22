import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const ItemTask = ({ task, removeTask, updateTask}) => {
  const { id, title, completed } = task;
  return (
    <article className="flex gap-4  border-b">

      <button
        className={`border-2 rounded-full h-5 w-5 flex-none ${
          completed
            ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => updateTask(id)}
      >
       {completed && <CheckIcon /> }
      </button>
      <p className={`text-gray-600 grow ${completed && "line-through"} `}>{title}</p>
      <button className="flex-none" onClick={() => removeTask(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default ItemTask;
