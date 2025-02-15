import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import HomePage from "./pages/HomePage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end py-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg"
            style={{
              backgroundColor: "var(--button-bg)",
              color: "var(--text-color)",
              transition: "background-color 0.3s ease",
            }}
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>

        <Router>
          <main className="py-6">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/task/:id" element={<TaskDetailsPage />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
};

export default App;
