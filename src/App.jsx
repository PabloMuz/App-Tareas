import { useState } from "react";
import AddTask from "./components/AddTask";
import ComputedTask from "./components/ComputedTask";
import FilterTask from "./components/FilterTask";
import Header from "./components/Header";
import ListTask from "./components/ListTask";

const initialStateTasks = [
  { id:1, title: "Task-1", completed: true},
  { id:2, title: "Task-2", completed: true},
  { id:3, title: "Task-3", completed: false},
  { id:4, title: "Task-4", completed: true},
]

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);

  const createTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }
    setTasks([...tasks,newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const updateTask = (id) => {
 setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
};

const countItems = tasks.filter((task) => !task.completed).length;

const clearCompleted = () => {
  setTasks(tasks.filter((task) => !task.completed));
};

  return (
    <div
      className="bg-no-repeat bg-contain min-h-screen bg-gray-300"
      style={{
        backgroundImage: `url('src/assets/images/bg-mobile-light.jpg')`,
      }}
    >
      <Header />
      <main className="container mx-auto px-4 mt-6 ">
        <AddTask createTask={createTask}/>
        <ListTask tasks={tasks} removeTask={removeTask} updateTask={updateTask}/>
        <ComputedTask countItems={countItems} clearCompleted={clearCompleted}/>
        <FilterTask />
      </main>

      <footer className="text-center">Drag and Drop</footer>
    </div>
  );
};

export default App;
