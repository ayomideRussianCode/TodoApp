import { useLocation, useNavigate } from "react-router-dom";

const TaskDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const todo = location.state?.todo; 

  if (!todo) return <p>Task not found</p>;

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{todo.title}</h2>
      <p>Task ID: {todo.id}</p>
      <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
      <p>User ID: {todo.userId}</p>
      <button
        onClick={() => navigate("/home")}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-full"
      >
        Back
      </button>
    </div>
  );
};

export default TaskDetailsPage;