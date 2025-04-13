import { Routes as ReactRoutes, Route, RouteProps } from "react-router-dom";
import { FC } from "react";
import { HomePage } from "../pages/HomePage";
import { Products } from "../pages/Products";
import { About } from "../pages/About";
import { Contact } from "../pages/ContactPage";
import ProductDetail from "../pages/productDetails";
import BlogPage from "../pages/BlogPage";
import BlogDetail from "../pages/BlogDetails";
const Routes: FC<RouteProps> = () => (
  <ReactRoutes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
  </ReactRoutes>
);

export default Routes;
