import { createContext, useState } from 'react';

export const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    setTasks((oldState) => {
      return [...oldState, { description, id: oldState.length + 1 }];
    });
  };

  const toggleTaskCompeted = (id) => {
    setTasks((oldState) => {
      return oldState.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((oldState) => {
      return oldState.filter((t) => t.id !== id);
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompeted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
