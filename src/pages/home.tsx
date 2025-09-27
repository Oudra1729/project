import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Products";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen" dir="rtl">
        <Navbar onLoginClick={() => setIsAuthOpen(true)} />
        
        <main>
          <Hero />
          <Features />
          <Products />
        </main>
        <Footer />
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)} 
        />
      </div>
    </>
  );
};

export default Home;
