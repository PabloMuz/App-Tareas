import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ComputedTask from "./components/ComputedTask";
import FilterTask from "./components/FilterTask";
import Header from "./components/Header";
import ListTask from "./components/ListTask";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);
localStorage.setItem("tasks", JSON.stringify(tasks));
  useEffect(() => {

  }, [tasks])

  // Created Task
  const createTask = (title, priority, date) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      priority: priority,
      date: date
    };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update Task
  const updateTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Count Task
  const countItems = tasks.filter((task) => !task.completed).length;

  // Deleted Completed Task
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter Task
  const [filter, setFilter] = useState("all");
  const changeFilter = (filter) => setFilter(filter);

  const filteredTasks = () => {
    switch (filter) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="bg-no-repeat bg-contain pt-5 min-h-screen bg-gray-300 transition-all duration-600 dark:bg-gray-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-blue-900 dark:via-gray-600 dark:to-pink-900">
      <Header />
      <main className="container mx-auto px-4 mt-6 rounded-t md:max-w-xl">
        <AddTask createTask={createTask} />
        <ListTask
          tasks={filteredTasks()}
          removeTask={removeTask}
          updateTask={updateTask}
          filteredTasks={filteredTasks}
        />
        <ComputedTask countItems={countItems} clearCompleted={clearCompleted} />
        <FilterTask changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center dark:text-gray-200 mt-6 transition-all duration-500">
        Drag and Drop
      </footer>
    </div>
  );
};

export default App;