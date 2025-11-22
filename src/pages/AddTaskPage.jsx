import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import AddTask from "../components/addTask/AddTask";
import Header from "../components/header/Header";

function AddTaskPage() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleAddTask = (task) => {
    addTask(task);
    navigate("/");
  };

  return (
    <div className="w-full space-y-6">
      <Header title="Adicionar Tarefa" />
      <AddTask addTask={handleAddTask} />
    </div>
  );
}

export default AddTaskPage;

