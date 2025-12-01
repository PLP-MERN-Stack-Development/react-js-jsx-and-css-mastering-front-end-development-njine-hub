import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTheme } from "../context/ThemeContext";

export default function TaskManager() {
  const { theme, toggleTheme } = useTheme();
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");

  const addTask = () => { if(!text) return; setTasks([...tasks,{id:Date.now(),text,completed:false}]); setText(""); }
  const toggleTask = (id) => setTasks(tasks.map(t=>t.id===id?{...t,completed:!t.completed}:t));
  const deleteTask = (id) => setTasks(tasks.filter(t=>t.id!==id));
  const filtered = tasks.filter(t=>filter==="active"?!t.completed:filter==="completed"?t.completed:true);

  return (
    <div className={`${theme==="dark"?"bg-gray-900 text-white":"bg-white"} min-h-screen p-6`}>
      <button onClick={toggleTheme} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Toggle Theme</button>
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter task" className="border p-2 rounded mr-2"/>
        <button onClick={addTask} className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
      </div>
      <div className="flex gap-2 mb-4">
        {["all","active","completed"].map(f=><button key={f} onClick={()=>setFilter(f)} className="px-3 py-1 border rounded">{f.charAt(0).toUpperCase()+f.slice(1)}</button>)}
      </div>
      <ul className="space-y-2">
        {filtered.map(task=>(
          <li key={task.id} className="flex justify-between p-3 border rounded">
            <span onClick={()=>toggleTask(task.id)} className={`${task.completed?"line-through text-gray-500":""} cursor-pointer`}>{task.text}</span>
            <button onClick={()=>deleteTask(task.id)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
