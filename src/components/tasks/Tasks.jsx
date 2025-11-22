import { CheckIcon, ChevronRightIcon, TrashIcon, XIcon } from "lucide-react";
import PropTypes from "prop-types";

function Tasks(props) {
    const { tasks, toggleTask, deleteTask, handleTaskDetails } = props;
    console.log(tasks);
    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button 
                            onClick={() => toggleTask(task.id)}
                            className={`w-full text-left px-4 py-3 rounded-md flex items-center justify-between border transition-colors text-sm ${
                                task.completed 
                                    ? "bg-green-50 border-green-200 text-green-800" 
                                    : "bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
                            }`}
                        >
                            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                            {task.completed ? (
                                <CheckIcon className="w-5 h-5 text-green-600" /> 
                            ) : (
                                <XIcon className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                        <button 
                            className="bg-white border border-gray-300 text-gray-700 px-3 py-3 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => handleTaskDetails(task)}
                        >
                            <ChevronRightIcon className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => deleteTask(task.id)}
                            className="bg-white border border-gray-300 text-red-600 px-3 py-3 rounded-md hover:bg-red-50 transition-colors"
                        >
                            <TrashIcon className="w-4 h-4" />
                        </button>
                    </li>
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