"use client";
// import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(urlSegment) {
  const [posts, setPosts] = useState(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const { posts } = await fetch(`/api/${urlSegment}/${id}`).json();
      setPosts(posts);
      setLoading(false);
    };

    if (id) getPosts();
    else setData(null);
  }, [id]);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return {
    data,
    loading,
    id,
    handleChange,
  };
}
