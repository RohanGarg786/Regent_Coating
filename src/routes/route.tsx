import { Routes as ReactRoutes, Route, RouteProps } from "react-router-dom";
import { FC } from "react";
import { HomePage } from "../pages/HomePage";
import { Products } from "../pages/Products";
import { About } from "../pages/About";
import { Contact } from "../pages/ContactPage";
const Routes: FC<RouteProps> = () => (
  <ReactRoutes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </ReactRoutes>
);

export default Routes;
