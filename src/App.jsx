import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import AddTask from "./components/AddTask";
import ComputedTask from "./components/ComputedTask";
import FilterTask from "./components/FilterTask";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import ImageSection from "./components/ImageSection";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Synchronize tasks with localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const sortedTasks = tasks.slice().sort((a, b) => {
      // Convert dates to Date objects
      const dateA = a.date ? new Date(a.date) : null;
      const dateB = b.date ? new Date(b.date) : null;

      // Priority hierarchy
      if (a.date && b.date) {
        // If both have dates, sort by date
        if (dateA && dateB) {
          const dateDiff = dateA - dateB;
          if (dateDiff !== 0) return dateDiff;
          // If dates are equal, check priority
          if (a.priority && !b.priority) return -1; // 'a' has priority
          if (!a.priority && b.priority) return 1; // 'b' has priority
        }
      } else if (a.date && !b.date) {
        // If 'a' has a date but 'b' doesn't, 'a' takes priority
        return -1;
      } else if (!a.date && b.date) {
        // If 'b' has a date but 'a' doesn't, 'b' takes priority
        return 1;
      } else {
        // If neither has a date, prioritize by the 'priority' property
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
      }

      // If priorities are equal or neither has a date, maintain the current order
      return 0;
    });
    setTasks(sortedTasks);
  }, [filter]);



  // Created Task
  const createTask = (title, priority, date) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      priority: priority,
      date: date,
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

  // Function to filter tasks based on the current state
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

  const changeFilter = (filter) => setFilter(filter);

  return (
    <div className="bg-no-repeat bg-contain pt-5 min-h-screen bg-gray-300 transition-all duration-600 dark:bg-gray-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-blue-900 dark:via-gray-600 dark:to-pink-900">
      <Header />
      <main className="container mx-auto px-4 mt-6 rounded-t md:max-w-xl">
        <AddTask createTask={createTask} />
          <ListTask
            tasks={filteredTasks()}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        <ComputedTask countItems={countItems} clearCompleted={clearCompleted} />
        <FilterTask changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center dark:text-gray-200 mt-6 pb-6 transition-all duration-500">
        Gestiona tus tareas! 
      </footer>
    </div>
  );
};

export default App;
