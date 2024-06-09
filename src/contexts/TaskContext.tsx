"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface TaskContextType {
  tasks: any;
  setTasks: any;
  taskLoading: any;
  setTaskLoading: any;
  addNewTask: () => void;
  fetchTasks: () => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [taskLoading, setTaskLoading] = useState(true);
  const [tasks, setTasks] = useState(
    [] /* [
    {
      id: 1,
      title: "Close off Case #012920- RODRIGUES, Amiguel",
      date: new Date(2021, 6, 12),
      description:
        "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
      isDone: false,
    },
    {
      id: 2,
      title:
        "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
      date: new Date(2021, 5, 14),
      description:
        "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
      isDone: false,
    },
    {
      id: 3,
      title: "Set up appointment with Dr Blake",
      date: new Date(2021, 6, 22),
      description: "",
      isDone: true,
    },
  ] */
  );

  const fetchTasks = async () => {
    setTaskLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      const formattedTasks = data.todos.map((todo: any) => ({
        id: todo.id,
        title: todo.todo,
        date: null,
        description: "",
        isDone: todo.completed,
      }));
      setTaskLoading(false);
      setTasks(formattedTasks);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const addNewTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "",
      date: null,
      description: "",
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id: number) => {
    try {
      await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
        addNewTask,
        deleteTask,
        taskLoading,
        setTaskLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};
