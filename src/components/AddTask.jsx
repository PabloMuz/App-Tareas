import { useState } from "react";
import Swal from "sweetalert2";


const AddTask = ({createTask}) => {

  const [title, setTitle] = useState('');

  const handleSubmitAddTask = (e) => {
    e.preventDefault();

    if(!title.trim()) {
       setTitle("");
    } else {
      createTask(title);
      setTitle("");
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tarea agregada con éxito",
      showConfirmButton: false,
      timer: 1200,
  });
  console.log(title);

  };
  return(
    <form onSubmit={handleSubmitAddTask}
          action=""
          className="bg-white rounded-md overflow-hidden p-4 flex gap-3 items-center px-4 dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
        >
          <span className="inline-block border-2 rounded-full  h-5 w-5"></span>
          <input
            className="w-full text-gray-300 outline-none dark:bg-gray-700 transition-all duration-500"
            type="text"
            placeholder="Crear Tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
  )
};

export default AddTask;