// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Home, Menu, Paintbrush, Info, Mail, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../assets/Logo.png";
// // import Regent_logo from "../assets/Regent_logo.jpg";

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { path: "/", name: "Home", icon: Home },
//     { path: "/products", name: "Products", icon: Paintbrush },
//     { path: "/about", name: "About", icon: Info },
//     { path: "/contact", name: "Contact", icon: Mail },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <Link to="/" className="flex items-center group">
//             <motion.img
//               alt="logo"
//               src={Logo}
//               style={{ width: "30px" }}
//               whileHover={{ rotate: 15 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//             <motion.span
//               className="ml-2 text-2xl font-bold text-gray-900 group-hover:text-brown transition-colors"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               ReGent Coatings
//             </motion.span>
//           </Link>

//           {/* Hamburger Icon for Mobile */}
//           <div className="md:hidden">
//             <motion.button
//               onClick={toggleMobileMenu}
//               className="text-gray-700 hover:text-brown focus:outline-none"
//               aria-label="Toggle menu"
//               aria-expanded={isMobileMenuOpen}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </motion.button>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <motion.div
//                 key={link.path}
//                 className="relative"
//                 onHoverStart={() => setHoveredLink(link.path)}
//                 onHoverEnd={() => setHoveredLink(null)}
//               >
//                 <Link
//                   to={link.path}
//                   className={`relative text-gray-700 hover:text-brown transition-colors flex items-center ${
//                     location.pathname === link.path ? "text-emerald-600" : ""
//                   }`}
//                 >
//                   <link.icon className="h-5 w-5 mr-1" />
//                   <span className="font-medium">{link.name}</span>
//                 </Link>

//                 {/* Animated underline */}
//                 {(hoveredLink === link.path ||
//                   location.pathname === link.path) && (
//                   <motion.div
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-brown"
//                     layoutId="navUnderline"
//                     initial={{ width: 0 }}
//                     animate={{ width: "100%" }}
//                     transition={{
//                       duration: 0.3,
//                       type: "spring",
//                       stiffness: 300,
//                     }}
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Menu with Animation */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden bg-white shadow-lg absolute top-20 right-0 w-64 rounded-b-lg overflow-hidden"
//               role="menu"
//             >
//               <motion.div
//                 className="flex flex-col items-start space-y-1 py-2 px-2"
//                 initial="closed"
//                 animate="open"
//                 exit="closed"
//                 variants={{
//                   open: {
//                     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//                   },
//                   closed: {
//                     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//                   },
//                 }}
//               >
//                 {navLinks.map((link, i) => (
//                   <motion.div
//                     key={link.path}
//                     variants={{
//                       open: {
//                         y: 0,
//                         opacity: 1,
//                         transition: {
//                           y: { stiffness: 1000, velocity: -100 },
//                         },
//                       },
//                       closed: {
//                         y: 50,
//                         opacity: 0,
//                         transition: {
//                           y: { stiffness: 1000 },
//                         },
//                       },
//                     }}
//                     className="w-full"
//                   >
//                     <Link
//                       to={link.path}
//                       className={`flex items-center w-full px-4 py-3 rounded-md transition-all ${
//                         location.pathname === link.path
//                           ? "bg-gray-100 text-gray-700"
//                           : "text-gray-700 hover:bg-gray-100 hover:text-brown"
//                       }`}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       <link.icon className="h-5 w-5 mr-3" />
//                       <span className="font-medium">{link.name}</span>
//                       {location.pathname === link.path && (
//                         <motion.span
//                           className="ml-auto h-2 w-2 rounded-full bg-brown"
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           transition={{ type: "spring", stiffness: 500 }}
//                         />
//                       )}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Menu,
  Paintbrush,
  Info,
  Mail,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for products submenu
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

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const navLinks = [
    { path: "/", name: "Home", icon: Home },
    {
      path: "/products",
      name: "Products",
      icon: Paintbrush,
      submenu: [
        {
          path: "/products/pu-luxury-wood-finish",
          name: "PU Luxury Wood Finish",
        },
        // Add more products here later (e.g., { path: "/products/another-product", name: "Another Product" })
      ],
    },
    { path: "/about", name: "About", icon: Info },
    { path: "/contact", name: "Contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <motion.img
              alt="logo"
              src={Logo}
              style={{ width: "30px" }}
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="ml-2">
              <motion.span
                className="text-2xl font-bold text-gray-900 group-hover:text-brown transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Regent Coatings
              </motion.span>
              <motion.span
                className="block text-xs font-semibold text-gray-700 group-hover:text-brown transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }} // Slight delay for staggered animation
              >
                LUXURY ITALIAN WOOD FINISH
              </motion.span>
            </div>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-brown focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                className="relative"
                onHoverStart={() => setHoveredLink(link.path)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                {link.submenu ? (
                  <div className="relative">
                    <button
                      onClick={toggleProductsMenu}
                      className={`relative text-gray-700 hover:text-brown transition-colors flex items-center ${
                        location.pathname.startsWith("/products")
                          ? "text-emerald-600"
                          : ""
                      }`}
                    >
                      <link.icon className="h-5 w-5 mr-1" />
                      <span className="font-medium">{link.name}</span>
                      {isProductsOpen ? (
                        <ChevronUp className="h-5 w-5 ml-1" />
                      ) : (
                        <ChevronDown className="h-5 w-5 ml-1" />
                      )}
                    </button>
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                        >
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brown ${
                                location.pathname === subItem.path
                                  ? "bg-gray-100"
                                  : ""
                              }`}
                              onClick={() => setIsProductsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative text-gray-700 hover:text-brown transition-colors flex items-center ${
                      location.pathname === link.path ? "text-emerald-600" : ""
                    }`}
                  >
                    <link.icon className="h-5 w-5 mr-1" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                )}

                {(hoveredLink === link.path ||
                  location.pathname === link.path) &&
                  !link.submenu && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brown"
                      layoutId="navUnderline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                      }}
                    />
                  )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-lg absolute top-20 right-0 w-64 rounded-b-lg overflow-hidden"
              role="menu"
            >
              <motion.div
                className="flex flex-col items-start space-y-1 py-2 px-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    className="w-full"
                  >
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={toggleProductsMenu}
                          className={`flex items-center w-full px-4 py-3 rounded-md transition-all ${
                            location.pathname.startsWith("/products")
                              ? "bg-gray-100 text-gray-700"
                              : "text-gray-700 hover:bg-gray-100 hover:text-brown"
                          }`}
                        >
                          <link.icon className="h-5 w-5 mr-3" />
                          <span className="font-medium">{link.name}</span>
                          {isProductsOpen ? (
                            <ChevronUp className="h-5 w-5 ml-auto" />
                          ) : (
                            <ChevronDown className="h-5 w-5 ml-auto" />
                          )}
                        </button>
                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="pl-8"
                            >
                              {link.submenu.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brown ${
                                    location.pathname === subItem.path
                                      ? "bg-gray-100"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsProductsOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`flex items-center w-full px-4 py-3 rounded-md transition-all ${
                          location.pathname === link.path
                            ? "bg-gray-100 text-gray-700"
                            : "text-gray-700 hover:bg-gray-100 hover:text-brown"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <link.icon className="h-5 w-5 mr-3" />
                        <span className="font-medium">{link.name}</span>
                        {location.pathname === link.path && (
                          <motion.span
                            className="ml-auto h-2 w-2 rounded-full bg-brown"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                        )}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
