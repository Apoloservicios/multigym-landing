import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const DownloadApp: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contenido */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Descarga la App MultiGym
            </h2>
            
            <p className="text-xl mb-8 text-blue-100">
              Lleva el control de tu gimnasio en tu bolsillo. Gestiona usuarios, 
              revisa estadísticas y verifica accesos desde cualquier lugar.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Acceso en tiempo real</h3>
                  <p className="text-blue-100">Verifica quién ingresa a tu gimnasio al instante.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Notificaciones instantáneas</h3>
                  <p className="text-blue-100">Recibe alertas sobre pagos, nuevos registros y más.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Dashboard completo</h3>
                  <p className="text-blue-100">Visualiza toda la información de tu negocio desde tu móvil.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaGoogle className="mr-3 text-xl" />
                <div>
                  <div className="text-xs">DESCARGA EN</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
              
              {/* <a 
                href="#" 
                className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaApple className="mr-3 text-xl" />
                <div>
                  <div className="text-xs">DESCARGA EN</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a> */}
            </div>
          </div>
          
          {/* Imagen */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-400 rounded-3xl opacity-30 blur-xl"></div>
              <img 
                src="/img/mokup.png" 
                alt="MultiGym App" 
                className="relative z-10 max-w-full max-h-96"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'public/img';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;