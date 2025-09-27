import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import ProductDetails from "./pages/product";
import AboutUs from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
// import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
