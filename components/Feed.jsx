"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => (
  <div className="mt-16 prompt_layout">
    {data.map((post) => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
      setSearchResults(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const q = searchText.trim().toLowerCase().replace(/^#/, "");
    if (!q) {
      setSearchResults(posts);
      return;
    }

    const results = posts.filter((post) => {
      const prompt = (post.prompt || "").toLowerCase();
      const tag = (post.tag || "").toLowerCase().replace(/^#/, "");
      const username = (post.creator?.username || "").toLowerCase();

      return prompt.includes(q) || tag.includes(q) || username.includes(q);
    });

    setSearchResults(results);
  }, [searchText, posts]);

  const handleTagClick = (tag) => {
    setSearchText(tag);
  };

  return (
    <section className="feed ">
      <form
        className="relative w-full flex-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search for a tag, username, or text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search_input peer"
          autoComplete="off"
        />
      </form>

      <PromptCardList data={searchResults} handleTagClick={handleTagClick} />
    </section>
  );
}
