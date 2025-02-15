import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  userName: string; 
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=0" 
        );
        const tasksWithUsers = response.data.map((task: any) => ({
          ...task,
          userName: `User ${task.userId}`, 
        }));
        setTasks(tasksWithUsers);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tasks:", err); 
        setError("Failed to fetch tasks");
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

  const addTask = (title: string, userName: string) => {
    if (!title.trim() || !userName.trim()) {
      alert("Please enter a task title and your name."); 
      return;
    }

    const newTask: Task = {
      id: Date.now(), 
      title,
      completed: false,
      userName, 
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>

      <AddTaskForm onAdd={addTask} />

      <div className="mb-4">
        <label className="mr-2">Filter:</label>
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
            <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
            <p>User: {task.userName}</p> 
            <button
              onClick={() => toggleTaskStatus(task.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface AddTaskFormProps {
  onAdd: (title: string, userName: string) => void;
}

const AddTaskForm = ({ onAdd }: AddTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState(""); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title, userName); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-2 border rounded mb-2"
        required 
      />
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 border rounded mb-2"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default HomePage;