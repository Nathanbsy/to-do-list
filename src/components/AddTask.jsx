import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-200 p-6 rounded-md shadow mt-4 space-y-4 flex flex-col">
      <Input
        type="text"
        placeholder="Digite a tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={() => {
        if (!title.trim() || !description.trim()) {
            return alert("Você precisa preencher todos os campos!");
        }
        onAddTask(title, description);
        setTitle("");
        setDescription("");
      }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
