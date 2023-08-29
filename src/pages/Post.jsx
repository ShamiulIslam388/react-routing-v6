import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`).then(
        (res) => res.json()
      ),
    ])
      .then(([postData, userData]) => {
        setPost(postData);
        setUser(userData);
        document.title = postData.title;
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id, post?.userId]);

  const content = loading ? (
    <div>Loading...</div>
  ) : (
    <div className="p-4 border rounded-md">
      <div className="text-xl font-semibold">{post.title}</div>
      <div className="text-sm font-medium text-gray-500 max-w-[120ch] break-word">
        {post.body}
      </div>
      <div className="px-5 py-1">
        <div className="text-md font-semibold">Who wrote the post?</div>
        <div className="px-4">
          {" "}
          <div>Name: {user?.name}</div>
          <div>Email: {user?.email}</div>
          <div>Address: {user?.address?.city}</div>
          <div>Website: {user?.website}</div>
          <div>Mobile: {user?.phone}</div>
        </div>
      </div>
      <Link to="/posts" className="underline text-blue-500">
        Go to posts
      </Link>
    </div>
  );

  return content;
};

export default Post;
