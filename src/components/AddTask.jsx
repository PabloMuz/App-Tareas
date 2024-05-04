import { useState } from "react";
import Swal from "sweetalert2";
import CheckIcon from "./icons/CheckIcon";

const AddTask = ({ createTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(false);
  const [date, setDate] = useState('');

  const handleSubmitAddTask = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitle("");
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "El título de la tarea no puede estar vacío",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      createTask(title, priority, date);
      setTitle("");
      setPriority(false);
      setDate("");
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tarea agregada con éxito",
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <form
      onSubmit={handleSubmitAddTask}
      className="bg-white w-full rounded-md overflow-hidden p-4 flex gap-3 items-center px-4 dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
    >

      <div className="w-4/5">
      <input
        className="w-full text-gray-500 dark:text-gray-300 outline-none dark:bg-gray-700 transition-all duration-500"
        type="text"
        placeholder="Crear Tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
<div className="flex flex-row mt-6 justify-between">
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          checked={priority}
          onChange={() => setPriority(!priority)}
          className={`form-checkbox h-5 w-5 appearance-none border-2 rounded-full checked:bg-gradient-to-r checked:from-indigo-500 checked:via-purple-500 checked:to-pink-500`}
        />
        <span className={`absolute inset-0 flex justify-center items-center h-5 w-5 text-white ${priority ? '' : 'hidden'}`}>
          <CheckIcon />
        </span>
        <span className="ml-2 text-gray-500 dark:text-gray-300">Prioridad</span>
      </label>

      <input
        className="w-5 text-gray-500 dark:text-gray-300 outline-none dark:bg-gray-700 transition-all duration-500"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      </div>
       
      
      </div>
      <button
        type="submit"
        className="ml-auto px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300"
      >
        Guardar Tarea
      </button>
    </form>
  );
};

export default AddTask;
