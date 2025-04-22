import React from 'react';
import { FaQrcode, FaUserFriends, FaChartLine, FaCreditCard, FaCalendarCheck } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaQrcode />,
      title: "Acceso Digital",
      description: "Sistema de acceso mediante códigos QR o credenciales digitales que permite la entrada rápida y segura."
    },
    {
      icon: <FaCalendarCheck />,
      title: "Control de Asistencia",
      description: "Monitorea en tiempo real la asistencia y gestiona las suscripciones de tus miembros automáticamente."
    },
    {
      icon: <FaUserFriends />,
      title: "Gestión de Usuarios",
      description: "Administra perfiles, históricos y preferencias de tus clientes y staff desde un solo lugar."
    },
    {
      icon: <FaChartLine />,
      title: "Reportes en Tiempo Real",
      description: "Visualiza estadísticas, tendencias y métricas clave para optimizar tu negocio."
    },
    {
      icon: <FaCreditCard />,
      title: "Integración con Pagos",
      description: "Procesa pagos online, automatiza cobros recurrentes y gestiona la facturación fácilmente."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MultiGym ofrece todas las herramientas que necesitas para gestionar tu gimnasio de manera eficiente y moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#register" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full inline-block transition-colors shadow-md"
          >
            Descubre todas las funcionalidades
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;