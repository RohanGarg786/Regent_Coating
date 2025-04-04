import { Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Paintbrush className="h-6 w-6 text-emerald-500" />
            <span className="ml-2 text-xl font-bold text-white">
              Regent Coatings
            </span>
          </div>
          <p className="text-sm">Premium wood finishes for every surface</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Wood Polish
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Wood Sealers
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Varnishes
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Stains
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center">
        <p>&copy; 2025 Regent Coatings. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
