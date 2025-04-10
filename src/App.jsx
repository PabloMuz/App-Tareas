import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ComputedTask from "./components/ComputedTask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const sortedTasks = tasks.slice().sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : null;
      const dateB = b.date ? new Date(b.date) : null;
      if (a.date && b.date) {
        const dateDiff = dateA - dateB;
        if (dateDiff !== 0) return dateDiff;
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
      } else if (a.date && !b.date) return -1;
      else if (!a.date && b.date) return 1;
      else {
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
      }
      return 0;
    });
    setTasks(sortedTasks);
  }, [filter]);

  const createTask = (title, priority, date) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      priority,
      date,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const updateTask = (id) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  const clearCompleted = () =>
    setTasks(tasks.filter((task) => !task.completed));
  const countItems = tasks.filter((task) => !task.completed).length;

  const filteredTasks = () => {
    switch (filter) {
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
    <>
      <AddTask createTask={createTask} />
      <FilterTask changeFilter={changeFilter} filter={filter} />
      <ListTask
        tasks={filteredTasks()}
        removeTask={removeTask}
        updateTask={updateTask}
      />
      <ComputedTask countItems={countItems} clearCompleted={clearCompleted} />
    </>
  );
};

export default App;
