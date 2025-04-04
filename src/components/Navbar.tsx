import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, Paintbrush, Info, Mail } from "lucide-react";
import Regent_logo from "../assets/Regent_logo.jpg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img alt="logo" src={Regent_logo} style={{ width: "30px" }} />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              ReGent Coatings
            </span>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center ${
                location.pathname === "/" ? "text-emerald-600" : ""
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              Home
            </Link>
            <Link
              to="/products"
              className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center ${
                location.pathname === "/products" ? "text-emerald-600" : ""
              }`}
            >
              <Paintbrush className="h-5 w-5 mr-1" />
              Products
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center ${
                location.pathname === "/about" ? "text-emerald-600" : ""
              }`}
            >
              <Info className="h-5 w-5 mr-1" />
              About
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center ${
                location.pathname === "/contact" ? "text-emerald-600" : ""
              }`}
            >
              <Mail className="h-5 w-5 mr-1" />
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-white shadow-lg absolute top-20 right-0 w-64" // Changed to right-0 and fixed width
            role="menu"
          >
            <div className="flex flex-col items-start space-y-4 py-4 px-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center w-full px-4 py-2 ${
                  location.pathname === "/" ? "text-emerald-600" : ""
                } hover:bg-gray-100`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link
                to="/products"
                className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center w-full px-4 py-2 ${
                  location.pathname === "/products" ? "text-emerald-600" : ""
                } hover:bg-gray-100`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Paintbrush className="h-5 w-5 mr-1" />
                Products
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center w-full px-4 py-2 ${
                  location.pathname === "/about" ? "text-emerald-600" : ""
                } hover:bg-gray-100`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Info className="h-5 w-5 mr-1" />
                About
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-emerald-600 transition-colors flex items-center w-full px-4 py-2 ${
                  location.pathname === "/contact" ? "text-emerald-600" : ""
                } hover:bg-gray-100`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="h-5 w-5 mr-1" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
