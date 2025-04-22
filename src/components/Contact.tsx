import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage({
        text: 'Por favor completa todos los campos',
        type: 'error'
      });
      return;
    }
    
    // Simulación de envío
    setIsSubmitting(true);
    
    // Simular llamada a API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        text: '¡Mensaje enviado! Te contactaremos pronto.',
        type: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Completa el formulario
            y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Información de contacto */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                    <a href="mailto:info@multigym.com" className="text-gray-900 hover:text-blue-600 transition-colors">
                      info@multigym.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Teléfono</h4>
                    <a href="tel:+123456789" className="text-gray-900 hover:text-blue-600 transition-colors">
                      +123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Dirección</h4>
                    <address className="text-gray-900 not-italic">
                      Av. Siempre Viva 123<br />
                      Ciudad, CP 12345
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4 text-gray-900">Síguenos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className={`bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </div>
                
                {/* Mensaje de respuesta */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;