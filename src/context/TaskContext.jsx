import { useState, useEffect } from "react";
import { uid } from "uid";
import PropTypes from "prop-types";
import { TaskContext } from "./taskContext.js";

const STORAGE_KEY = "tasks";

const loadTasksFromStorage = () => {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      return Array.isArray(parsedTasks) ? parsedTasks : [];
    }
  } catch (error) {
    console.error("Erro ao carregar tasks do localStorage:", error);
  }
  return [];
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => loadTasksFromStorage());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.error("Erro ao salvar tasks no localStorage:", error);
      }
    }
  }, [tasks, isInitialized]);

  const addTask = (task) => {
    setTasks([...tasks, { id: uid(), completed: false, ...task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const editTask = (id, task) => {
    setTasks(tasks.map((t) => t.id === id ? task : t));
  };

  const getTaskById = (id) => {
    return tasks.find((task) => task.id === id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        editTask,
        getTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

