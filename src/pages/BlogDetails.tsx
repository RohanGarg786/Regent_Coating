import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { coatings } from "../data/coatingsData";
import { BlogPost } from "../interface/BlogInterface"; // Adjust the import path if needed

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = coatings.find((p) => p.id.toString() === id);
    if (!foundPost) {
      navigate("/");
    } else {
      setPost(foundPost);
    }
  }, [id, navigate]);

  if (!post) return <div>Loading...</div>;

  return (
    <div
      className="min-h-screen bg-gray-100  px-4 sm:px-6 lg:px-8"
      style={{
        padding: "7rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full  object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-6">{post.date}</p>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features</h2>
          <ul className="list-disc pl-5 mb-6">
            {post.keyFeatures.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Typical Applications
          </h2>
          <ul className="list-disc pl-5 mb-6">
            {post.applications.map((app, index) => (
              <li key={index} className="text-gray-700">
                {app}
              </li>
            ))}
          </ul>

          {post.technicalSpecs && post.technicalSpecs.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Technical Specifications
              </h2>
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Property</th>
                    <th className="border border-gray-300 p-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {post.technicalSpecs.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="border border-gray-300 p-2">
                        {spec.property}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {post.surfacePrep && post.surfacePrep.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Surface Preparation
              </h2>
              <ul className="list-disc pl-5 mb-6">
                {post.surfacePrep.map((prep, index) => (
                  <li key={index} className="text-gray-700">
                    {prep}
                  </li>
                ))}
              </ul>
            </>
          )}

          {post.packaging && post.packaging.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-4">Packaging</h2>
              <ul className="list-disc pl-5 mb-6">
                {post.packaging.map((pack, index) => (
                  <li key={index} className="text-gray-700">
                    {pack}
                  </li>
                ))}
              </ul>
            </>
          )}

          {post.safety && post.safety.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Safety & Handling
              </h2>
              <ul className="list-disc pl-5 mb-6">
                {post.safety.map((safety, index) => (
                  <li key={index} className="text-gray-700">
                    {safety}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/blog"
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#7B3F0F] transition-colors duration-300 animate-fade-in"
          >
            Back to Blogs
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
