import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = "posts page";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col underline">
      {posts.slice(0, 10).map((post) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          className="text-xl font-semibold"
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Posts;
