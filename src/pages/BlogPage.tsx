import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { coatings } from "../data/coatingsData";
import BlogCard from "../components/BlogCard";

const BlogPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (id: string) => {
    // Changed parameter type to string
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8"
      style={{
        padding: "7rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Welcome to Regent Coatings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coatings.map((post) => (
            <motion.div
              key={post.id} // Already a string, no change needed here
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Number(post.id) * 0.2 }} // Convert string to number for delay if needed
            >
              <BlogCard post={post} onClick={() => handleCardClick(post.id)} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12 rounded-full"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            className="text-white px-8 py-3 button-hover flex items-center animate-fade-in rounded-full"
            style={{
              backgroundColor: "#8B4513",
            }}
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
