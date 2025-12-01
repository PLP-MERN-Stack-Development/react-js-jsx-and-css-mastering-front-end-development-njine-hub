import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api-posts">API Posts</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 transition"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  )
}
