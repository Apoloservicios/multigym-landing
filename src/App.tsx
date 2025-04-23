import React, { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaApple } from 'react-icons/fa';

// Importamos los componentes de las secciones
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Register from './components/Register';
import DownloadApp from './components/DownloadApp';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* WhatsApp flotante */}
      <a 
        href="https://wa.me/2604515854" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
      
      <Header />
      <Hero />
      <Features />
      {/* <Register /> */}
      <DownloadApp />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;