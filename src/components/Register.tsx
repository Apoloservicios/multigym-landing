import React, { useState } from 'react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    gymName: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.gymName) {
      setSubmitMessage({
        text: 'Por favor completa todos los campos',
        type: 'error'
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setSubmitMessage({
        text: 'Las contraseñas no coinciden',
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
        text: '¡Registro exitoso! Revisa tu email para confirmar tu cuenta.',
        type: 'success'
      });
      
      // Reset form
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        gymName: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen/Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3"></div>
              <img 
                src="/img/mancuernas600x400.jpg" 
                alt="MultiGym Platform" 
                className="relative z-10 rounded-lg shadow-xl max-w-full max-h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'public/image';
                }}
              />
            </div>
          </div>
          
          {/* Formulario */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Regístrate en MultiGym
              </h2>
              
              <p className="text-gray-600 mb-6">
                Crea tu cuenta ahora y comienza a gestionar tu gimnasio de manera más eficiente.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="gymName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de tu gimnasio
                  </label>
                  <input 
                    type="text" 
                    id="gymName"
                    name="gymName"
                    value={formData.gymName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Ingresa el nombre de tu gimnasio"
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
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                  </label>
                  <input 
                    type="password" 
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Crea una contraseña segura"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmar contraseña
                  </label>
                  <input 
                    type="password" 
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Confirma tu contraseña"
                  />
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit"
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Procesando...' : 'Crear Cuenta'}
                  </button>
                </div>
                
                {/* Mensaje de respuesta */}
                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <p className="text-sm text-gray-500 mt-4">
                  Al registrarte, aceptas nuestros <a href="#" className="text-blue-600 hover:underline">Términos y Condiciones</a> y nuestra <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;