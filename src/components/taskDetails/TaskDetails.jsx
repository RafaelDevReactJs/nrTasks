import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon, CalendarIcon, FileTextIcon } from "lucide-react";
import Header from "../header/Header";

function TaskDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const task = location.state?.task;

    if (!task) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-gray-500 mb-4">Tarefa não encontrada</p>
                <button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                    Voltar para Listagem
                </button>
            </div>
        );
    }

    return (
        <div className="w-full space-y-6">
            {/* Header com botão de voltar */}
            <Header title="Detalhes da Tarefa" />
            {/* Card de detalhes */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-6">
                {/* Título e Status */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                    <div className="flex-1">
                        <h1 className="text-1xl font-bold text-gray-800 mb-2">
                            {task.title}
                        </h1>
                        <div className="flex items-center gap-2">
                            {task.completed ? (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    <CheckCircleIcon className="w-4 h-4" />
                                    Concluída
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                                    <XCircleIcon className="w-4 h-4" />
                                    Pendente
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Descrição */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <FileTextIcon className="w-5 h-5" />
                        <h2 className="text-lg font-semibold text-gray-800">Descrição</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-7">
                        {task.description || "Nenhuma descrição fornecida."}
                    </p>
                </div>

                {/* Informações adicionais */}
                <div className="pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                            <CalendarIcon className="w-5 h-5 text-gray-500" />
                            <div>
                                <p className="text-xs text-gray-500">ID da Tarefa</p>
                                <p className="text-sm font-medium text-gray-800">#{task.id}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                            <div className="w-5 h-5 flex items-center justify-center">
                                {task.completed ? (
                                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                                ) : (
                                    <XCircleIcon className="w-5 h-5 text-yellow-600" />
                                )}
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Status</p>
                                <p className="text-sm font-medium text-gray-800">
                                    {task.completed ? "Concluída" : "Pendente"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ações */}
                <div className="pt-4 border-t border-gray-200 flex gap-3">
                    <button
                        onClick={() => navigate("/")}
                        className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
                    >
                        Voltar para Listagem
                    </button>
                    <button
                        onClick={() => navigate("/add-task")}
                        className="flex-1 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors font-medium"
                    >
                        Nova Tarefa
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-6 justify-end">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Voltar</span>
                </button>
            </div>

        </div>
    );
}

export default TaskDetails;