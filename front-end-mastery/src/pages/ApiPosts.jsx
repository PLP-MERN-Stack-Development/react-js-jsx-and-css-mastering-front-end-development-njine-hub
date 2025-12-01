import React from "react";
import { useEffect,useState } from "react";
import { fetchPosts } from "../api/postsApi.js";

export default function ApiPosts() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");

  useEffect(()=>{
    fetchPosts().then(data=>{setPosts(data);setLoading(false)}).catch(err=>{setError(err.message);setLoading(false)});
  },[]);

  if(loading) return <p>Loading...</p>;
  if(error) return <p className="text-red-500">{error}</p>;

  return <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{posts.map(post=>(
    <div key={post.id} className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
      <h2 className="font-bold text-xl mb-2">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
    </div>
  ))}</div>
}
