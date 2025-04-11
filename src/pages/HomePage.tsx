import { ArrowRight, ChevronDown, Droplets, Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Drum from "../assets/Drum.jpg";
import Regent_Background_new from "../assets/Regent_background_new.webp";
import Regent_image from "../assets/Regent_image.png";

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={Regent_Background_new}
            alt="Wood finishing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in">
              Luxury Italian Wood Finish
            </h1>
            <p className="text-xl mb-8 animate-fade-in">
              Transform your wooden surfaces with our professional-grade
              polishing and coating solutions
            </p>
            <div className="flex space-x-4">
              <Link
                to="/products"
                className="text-white px-8 py-3 rounded-full button-hover flex items-center animate-fade-in"
                style={{ backgroundColor: "#8B4513" }}
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors button-hover animate-fade-in"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in">
              Why Choose Our Wood Finishes
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              Superior protection meets elegant aesthetics
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 animate-fade-in">
              <div
                className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#8B4513" }}
              >
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Deep Penetration</h3>
              <p className="text-gray-600">
                Enhances wood grain with deep, rich color that lasts for years
              </p>
            </div>
            <div className="text-center p-6 animate-fade-in">
              <div
                className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#8B4513" }}
              >
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Superior Protection
              </h3>
              <p className="text-gray-600">
                Guards against scratches, stains, and daily wear and tear
              </p>
            </div>
            <div className="text-center p-6 animate-fade-in">
              <div
                className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#8B4513" }}
              >
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                Low VOC formulation safe for your home and the environment
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={Regent_image}
            alt="Wood finishing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <p className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in">
              Regent Coatings
            </p>
            <p className="text-xl mb-8 animate-fade-in">
              Belive in the beauty of wood with our premium finishes, designed
              to enhance and protect your wooden surfaces.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/about"
                className="text-white px-8 py-3 rounded-full button-hover flex items-center animate-fade-in"
                style={{ backgroundColor: "#8B4513" }}
              >
                Know about us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-slide-in">
            Ready to Transform Your Wooden Surfaces?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            Get in touch with our wood finishing experts for personalized
            recommendations
          </p>
          <Link
            to="/contact"
            className=" text-white px-8 py-3 rounded-full button-hover animate-fade-in"
            style={{ backgroundColor: "#8B4513" }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={Drum}
                alt="Modern Kitchen with Wood Finish"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Space
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our premium wood finishes bring out the natural beauty of your
                wooden surfaces while providing lasting protection. Perfect for
                furniture, floors, and architectural elements.
              </p>
              <Link
                to="/products"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full button-hover flex items-center w-fit"
              >
                View Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
