import React from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../interface/BlogInterface";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}
const MAX_EXCERPT_LENGTH = 100; // Set your desired character limit

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  // Truncate excerpt to MAX_EXCERPT_LENGTH characters
  const truncateExcerpt = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const truncatedExcerpt = truncateExcerpt(post.excerpt, MAX_EXCERPT_LENGTH);
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg cursor-pointer"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{post.date}</p>
        <p className="text-gray-700 mb-4 flex-grow">
          {" "}
          {/* flex-grow to push footer to bottom */}
          {truncatedExcerpt}
        </p>
        <span className="text-indigo-600 font-medium">Read More →</span>
      </div>
    </motion.div>
  );
};

export default BlogCard;
