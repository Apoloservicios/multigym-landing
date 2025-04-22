import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gray-900 text-white overflow-hidden"
    >
      {/* Overlay de fondo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/70 to-blue-600/60"></div>
      
      {/* Imagen o video de fondo */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="/hero-bg.jpg" 
          alt="Personas usando MultiGym" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }}
        />
      </div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Optimiza el acceso y gestión de tu gimnasio con MultiGym
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            La solución completa para gestionar usuarios, controlar accesos y administrar 
            suscripciones en tu gimnasio de forma digital.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="#register" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full text-center transition-colors shadow-lg flex items-center justify-center"
            >
              Regístrate en la Web
            </a>
            
            <div className="flex space-x-4">
              <a 
                href="#download" 
                className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-4 rounded-full text-center transition-colors shadow-lg flex items-center justify-center"
              >
                <FaGoogle className="mr-2" /> Google Play
              </a>
              
              <a 
                href="#download"
                className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-4 rounded-full text-center transition-colors shadow-lg flex items-center justify-center"
              >
                <FaApple className="mr-2" /> App Store
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separador con forma de onda */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f9fafb" fillOpacity="1" d="M0,192L60,181.3C120,171,240,149,360,138.7C480,128,600,128,720,144C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;