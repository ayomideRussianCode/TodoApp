import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TaskDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setTask(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch task details");
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Details</h1>
      <p>Task ID: {task.id}</p>
      <p>Title: {task.title}</p>
      <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
      <p>User ID: {task.userId}</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Back
      </button>
    </div>
  );
};

export default TaskDetailsPage;