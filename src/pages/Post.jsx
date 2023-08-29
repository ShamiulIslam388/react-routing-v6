import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        document.title = data.title;
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const content = loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="text-xl font-semibold">{post.title}</div>
      <div className="text-sm font-medium text-gray-500 max-w-[120ch] break-word">
        {post.body}
      </div>
      <Link to="/posts" className="underline text-blue-500">
        Go to posts
      </Link>
    </div>
  );

  return content;
};

export default Post;
