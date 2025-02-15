import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTasks(response.data);
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const toggleTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      userId: 1, 
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>

      <AddTaskForm onAdd={addTask} />

      <div className="my-4">
        <label className="mr-2 font-medium">Filter:</label>
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "all" | "completed" | "incomplete")
          }
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="mb-4 p-4 border rounded-lg shadow-sm">
            <Link to={`/task/${task.id}`} className="text-lg font-medium">
              {task.title}
            </Link>
            <p>Status: {task.completed ? "Completed ✅" : "Incomplete ❌"}</p>
            <p>User ID: {task.userId}</p>
            <button
              onClick={() => toggleTaskStatus(task.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2"
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-full"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddTaskForm = ({ onAdd }: { onAdd: (title: string) => void }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-2 border rounded-lg"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">
        Add Task
      </button>
    </form>
  );
};

export default HomePage;
