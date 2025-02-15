import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/task/:id" element={<TaskDetailsPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;