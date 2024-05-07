import { Droppable, Draggable } from "@hello-pangea/dnd";

import ItemTask from "./ItemTask";

const ListTask = ({ tasks, removeTask, updateTask }) => {
  return (
        <div 
        className=" bg-white rounded-t-md shadow-xl overflow-hidden [&>article]:p-4 [&>article]:border-b-gray-400 mt-6 dark:bg-gray-700 transition-all duration-500">
          {tasks.map((task) => (
            <ItemTask
              key={task.id}
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
            />
          ))}
        </div>
      )};

export default ListTask;
