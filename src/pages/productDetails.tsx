import React from "react";
import { useParams, Link } from "react-router-dom";
import Regent_coatings from "../assets/Regent_coatings.png"; // Replace with specific product images later

const ProductDetail = () => {
  const { productId } = useParams(); // productId can be undefined if route doesn't match

  // Define product data with proper typing
  const products: Record<
    string,
    { title: string; image: string; description: string }
  > = {
    "pu-luxury-wood-finish": {
      title: "PU Luxury Wood Finish",
      image: Regent_coatings, // Use the same image for now
      description:
        "Regent Coatings PU Luxury Wood Finish blends elegance and durability, enhancing wood surfaces with a luxurious sheen available in glossy, semi-gloss, and matte finishes. This polyurethane coating offers superior protection against scratches, abrasions, heat, and chemicals, making it ideal for residential and commercial use. Engineered for UV and moisture resistance, it preserves wood integrity in challenging environments like kitchens and sunlit spaces. Easy to apply with spray or brush, it dries quickly for efficient projects. Eco-friendly low-VOC options ensure safety for users and the environment. Perfect for furniture, office desks, hotel interiors, wall panels, handrails, and staircases, this finish elevates aesthetics while ensuring long-lasting quality. Ideal for restoring antiques or finishing new pieces, it leaves a lasting impression.",
    },
  };

  // Safely access the product, providing a fallback if productId is undefined or invalid
  const product =
    productId && products[productId]
      ? products[productId]
      : {
          title: "Product Not Found",
          image: Regent_coatings,
          description: "Details for this product are not available.",
        };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              {product.description}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/products"
                className="inline-block bg-brown text-white px-6 py-3 rounded-md hover:bg-brown-dark transition-colors text-center"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
