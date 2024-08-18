"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { getPosts } from "@/utils/formatData";
import { FeedItem } from "./FeedItem";

export default function SocialFeed() {
  const [posts, setPosts] = useState([]);
  const { posts: allPosts } = useStore();

  useEffect(() => {
    if (allPosts.length > 0) {
      setPosts(allPosts);
    }
  }, [allPosts]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
        useStore.setState({ posts: postsData });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}