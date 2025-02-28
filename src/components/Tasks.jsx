import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onCheck, onDelete }) {
    const navigate = useNavigate();
    function verDetalhes(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/detalhes?${query.toString()}`);
    }
  return (
    <ul className="space-y-2 mt-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onCheck(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full cursor-pointer ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => verDetalhes(task)}
            
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Button>
          <Button
            onClick={() => onDelete(task.id)}
            
          >
            <ion-icon name="close-outline"></ion-icon>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
