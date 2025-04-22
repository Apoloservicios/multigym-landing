import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Control del scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="logo.svg" 
            alt="MultiGym Logo" 
            className="h-10"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'public/images';
            }}
          />
        </a>

        {/* Menú de navegación - Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Inicio</a>
          <a href="#features" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Características</a>
          <a href="#register" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Registro</a>
          <a href="#download" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Descarga la App</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contacto</a>
        </nav>

        {/* Botón de registro - Desktop */}
        <a 
          href="#register" 
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
        >
          Regístrate Ahora
        </a>

        {/* Botón de menú móvil */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#features" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Características</a>
              <a href="#register" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Registro</a>
              <a href="#download" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Descarga la App</a>
              <a href="#contact" className="text-gray-800 py-2" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              
              {/* Botón de registro - Móvil */}
              <a 
                href="#register" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Regístrate Ahora
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;