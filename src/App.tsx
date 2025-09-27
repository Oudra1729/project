import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen" dir="rtl">
        {/* ندوزو event للـ Navbar */}
        <Navbar onLoginClick={() => setIsAuthOpen(true)} />

        <main>
          <Hero />
          <Features />
          <Products />
        </main>

        <Footer />

        {/* المودال هنا ديما فوق كلشي */}
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)} 
        />
      </div>
    </AuthProvider>
  );
}

export default App;
