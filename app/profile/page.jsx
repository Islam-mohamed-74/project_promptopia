"use client";
import MyProfile from "@components/Profile";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "@node_modules/next/navigation";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        // Handle error silently
      }
    }
  };

  return (
    <MyProfile
      name="my"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
