"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import Link from "next/link";

interface FeedItemProps {
  post: {
    id: number;
    content: string;
    author: {
      id: number;
      name: string;
      profileImage: string;
    };
    likes: number;
    comments: number;
    createdAt: string;
  };
}

export default function FeedItem({ post }: FeedItemProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center gap-3">
        <img
          src={post.author.profileImage}
          alt={`${post.author.name}'s profile`}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <Link href={`/profile/${post.author.id}`}>
            <h3 className="text-lg font-medium">{post.author.name}</h3>
          </Link>
          <p className="text-gray-500 text-sm">{post.createdAt}</p>
        </div>
      </div>
      <p className="mt-3">{post.content}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <button onClick={handleLike} className="text-gray-700 hover:text-blue-500">
            {isLiked ? (
              <AiFillHeart className="text-xl text-red-500" />
            ) : (
              <AiOutlineHeart className="text-xl" />
            )}
          </button>
          <span className="text-gray-500">{post.likes} likes</span>
          <Link href={`/post/${post.id}`} className="text-gray-700 hover:text-blue-500">
            <BsChat className="text-xl" />
          </Link>
          <span className="text-gray-500">{post.comments} comments</span>
        </div>
        <div>
          <button className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}