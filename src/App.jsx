import { useEffect, useState } from "react";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        method: "GET"
      });
      const data = await response.json();
      setTasks(data);
    }
    // fetchTasks();
  }, []);

  function onCheck(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTask={onAddTask} />
        <Tasks tasks={tasks} onCheck={onCheck} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
