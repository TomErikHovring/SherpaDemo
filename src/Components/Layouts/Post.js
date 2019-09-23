import React, { useState, useEffect } from "react";

export default function Post({ match }) {
  useEffect(() => {
    fetchPost();
  });

  const [post, setPost] = useState({});

  const fetchPost = async () => {
    const fetchPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const post = await fetchPost.json();
    setPost(post);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <h5>{post.body}</h5>
    </div>
  );
}
