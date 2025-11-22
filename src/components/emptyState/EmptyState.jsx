import { useNavigate } from "react-router-dom";
import { ClipboardListIcon, PlusIcon } from "lucide-react";

function EmptyState() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <ClipboardListIcon className="w-12 h-12 text-gray-400" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Nenhuma tarefa cadastrada
      </h2>
      
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Comece a organizar suas tarefas criando sua primeira tarefa. 
        Clique no botão abaixo para adicionar uma nova tarefa.
      </p>
      
      <button
        onClick={() => navigate("/add-task")}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors font-medium shadow-md"
      >
        <PlusIcon className="w-5 h-5" />
        Criar Primeira Tarefa
      </button>
    </div>
  );
}

export default EmptyState;

