import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
          <div className="flex justify-center relative mb-6">
            <button onClick={() => navigate(-1)} className="text-white p-2 cursor-pointer text-xl absolute left-0 top-0 bottom-0">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Detalhes da Tarefaa
            </h1>
          </div>

          <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
            <p className="text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
