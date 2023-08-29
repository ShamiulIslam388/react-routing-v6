import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "posts page";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap gap-2.5 ">
      {posts.slice(0, 20).map((post) => (
        <div
          key={post.id}
          className="border p-4 rounded-md w-[200px] flex flex-col justify-between shadow"
        >
          <div className="text-xl font-500 text-sm">
            {post.title.slice(0, 20)}...
          </div>
          <button
            onClick={() => navigate(`/posts/${post.id}`)}
            className="max-w-fit self-end text-xs text-white bg-blue-500 border-0 px-2 py-1 rounded-md mt-2.5 hover:bg-blue-400 hover:scale-90 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
