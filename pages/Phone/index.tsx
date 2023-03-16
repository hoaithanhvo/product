import React from "react";
import { useState, useEffect } from "react";
const tabs = ["posts", "comments", "albums"];

function index() {
  const [posts, setPost] = useState<
    { id: number; url: string; title: string }[] | null
  >(null);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? { color: "#fff", background: "red" } : {}}
        >
          {tab}
        </button>
      ))}
      <ul>{posts && posts.map((post) => <li>{post.title || post.id}</li>)}</ul>
    </div>
  );
}

export default index;
