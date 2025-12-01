import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import TaskManager from "./pages/TaskManager";
import ApiPosts from "./pages/ApiPosts";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-posts" element={<ApiPosts />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
