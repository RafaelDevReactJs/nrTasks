import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import Header from "../components/header/Header";
import Tasks from "../components/tasks/Tasks";
import EmptyState from "../components/emptyState/EmptyState";

function ListTasks() {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  const handleTaskDetails = (task) => {
    navigate(`/task-details`, { state: { task } });
  };

  return (
    <div className="w-full space-y-6">
      <Header title="Listagem de Tarefas" />
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <Tasks
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          handleTaskDetails={handleTaskDetails}
        />
      )}
    </div>
  );
}

export default ListTasks;

