import { useState, useEffect } from "react";
import { CheckIcon, ChevronRightIcon, TrashIcon, XIcon } from "lucide-react";
import PropTypes from "prop-types";

function Tasks(props) {
    const { tasks, toggleTask, deleteTask, handleTaskDetails } = props;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                isMobile ? (
                    <li key={task.id}>
                        <div className="flex flex-col gap-2 w-full p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                            {/* Botão principal - 100% em mobile */}
                            <button 
                                onClick={() => toggleTask(task.id)}
                                className={`w-full text-left px-3 py-2.5 rounded-md flex items-center justify-between border-none transition-colors text-sm ${
                                    task.completed 
                                        ? "bg-green-50 border-green-200 text-green-800" 
                                        : "bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
                                }`}
                            >
                                <span className={`truncate ${task.completed ? "line-through" : ""}`}>{task.title}</span>
                                {task.completed ? (
                                    <CheckIcon className="w-4 h-4 text-green-600 flex-shrink-0 ml-2" /> 
                                ) : (
                                    <XIcon className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                                )}
                            </button>
                            
                            {/* Botões secundários - 45% cada em mobile */}
                            <div className="flex gap-2 w-full justify-end">
                                <button 
                                    className="bg-white border border-gray-300 text-gray-700 px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors flex-shrink-0"
                                    style={{ width: "5rem" }}
                                    onClick={() => handleTaskDetails(task)}
                                >
                                    <ChevronRightIcon className="w-4 h-4 mx-auto" />
                                </button>
                                <button 
                                    onClick={() => deleteTask(task.id)}
                                    className="bg-white border border-gray-300 text-red-600 px-3 py-2.5 rounded-md hover:bg-red-50 transition-colors flex-shrink-0"
                                    style={{ width: "5rem" }}
                                >
                                    <TrashIcon className="w-4 h-4 mx-auto" />
                                </button>
                                <button 
                                    onClick={() => toggleTask(task.id)}
                                    className={`bg-white border px-3 py-2.5 rounded-md transition-colors flex-shrink-0`}
                                    style={{ width: "5rem", borderColor: task.completed ? "#A7F3D0" : "#D1D5DB", color: task.completed ? "#059669" : "#374151" }}
                                    title={task.completed ? "Desmarcar como concluída" : "Marcar como concluída"}
                                >
                                    {task.completed ? (
                                        <CheckIcon className="w-4 h-4 mx-auto text-green-600" />
                                    ) : (
                                        <CheckIcon className="w-4 h-4 mx-auto text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </li>
                ) : (
                    <li key={task.id} className="flex flex-row gap-2">
                        <button 
                            onClick={() => toggleTask(task.id)}
                            className={`w-full text-left px-4 py-3 rounded-md flex items-center justify-between border transition-colors text-sm ${
                                task.completed 
                                    ? "bg-green-50 border-green-200 text-green-800" 
                                    : "bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
                            }`}
                        >
                            <span className={`truncate ${task.completed ? "line-through" : ""}`}>{task.title}</span>
                            {task.completed ? (
                                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" /> 
                            ) : (
                                <XIcon className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                            )}
                        </button>
                        <div className="flex gap-2">
                            <button 
                                className="bg-white border border-gray-300 text-gray-700 px-3 py-3 rounded-md hover:bg-gray-50 transition-colors flex-shrink-0"
                                onClick={() => handleTaskDetails(task)}
                            >
                                <ChevronRightIcon className="w-4 h-4" />
                            </button>
                            <button 
                                onClick={() => deleteTask(task.id)}
                                className="bg-white border border-gray-300 text-red-600 px-3 py-3 rounded-md hover:bg-red-50 transition-colors flex-shrink-0"
                            >
                                <TrashIcon className="w-4 h-4" />
                            </button>
                            <button 
                                onClick={() => toggleTask(task.id)}
                                className={`bg-white border px-3 py-3 rounded-md transition-colors flex-shrink-0`}
                                style={{ width: "5rem", borderColor: task.completed ? "#A7F3D0" : "#D1D5DB", color: task.completed ? "#059669" : "#374151" }}
                                title={task.completed ? "Desmarcar como concluída" : "Marcar como concluída"}
                            >
                                {task.completed ? (
                                    <CheckIcon className="w-4 h-4 mx-auto text-green-600" />
                                ) : (
                                    <CheckIcon className="w-4 h-4 mx-auto text-gray-400" />
                                )}
                            </button>
                        </div>
                    </li>
                )
            ))}
        </ul>
  );
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    toggleTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    handleTaskDetails: PropTypes.func.isRequired,
};

export default Tasks;