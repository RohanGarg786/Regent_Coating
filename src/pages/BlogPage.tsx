import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { coatings } from "../data/coatingsData";
import BlogCard from "../components/BlogCard";
import { ScrollReveal } from "../components/ScrollReveal";
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
          {coatings.map((post,index) => (
           <ScrollReveal key={index}>
              <BlogCard post={post} onClick={() => handleCardClick(post.id)} />
            </ScrollReveal>
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
          <ScrollReveal>
          <Link
            to="/"
            className="text-white px-8 py-3 button-hover flex items-center animate-fade-in rounded-full"
            style={{
              backgroundColor: "#8B4513",
            }}
          >
            Back to home
          </Link>
          </ScrollReveal>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
