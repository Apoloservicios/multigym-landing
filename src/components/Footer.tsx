import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <img 
              src="/logo-white.svg" 
              alt="MultiGym Logo" 
              className="h-10 mb-4"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/120x40?text=MultiGym&bg=2d3748&fg=ffffff';
              }}
            />
            <p className="mb-4">
              La solución más completa para la gestión de tu gimnasio. Desde el control de acceso hasta la administración de pagos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Características</a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">Registro</a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">Descarga la App</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          {/* Contáctanos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contáctanos</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@multigym.com" className="hover:text-white transition-colors">
                  info@multigym.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="hover:text-white transition-colors">
                  +123 456 789
                </a>
              </li>
              <li>
                <address className="not-italic">
                  Av. Siempre Viva 123<br />
                  Ciudad, CP 12345
                </address>
              </li>
            </ul>
          </div>
          
          {/* Recursos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Tutoriales</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright y términos */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} MultiGym. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;