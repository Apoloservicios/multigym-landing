# MultiGym Landing Page

Landing page moderna y atractiva para promocionar el sistema MultiGym, desarrollada con React, TypeScript y Tailwind CSS.

## Características

- **Diseño moderno y atractivo** optimizado para conversión
- **Completamente responsive** (móvil, tablet, escritorio)
- **Implementado con React y TypeScript**
- **Estilizado con Tailwind CSS**
- **Animaciones suaves** al hacer scroll
- **Formularios interactivos** de registro y contacto
- **Componentes reutilizables**

## Estructura del proyecto

```
multigym-landing/
│
├── public/               # Archivos públicos (favicon, imágenes, etc.)
│
├── src/                  # Código fuente
│   ├── components/       # Componentes de React
│   │   ├── Header.tsx    # Encabezado con navegación
│   │   ├── Hero.tsx      # Banner principal
│   │   ├── Features.tsx  # Sección de características
│   │   ├── Register.tsx  # Formulario de registro
│   │   ├── DownloadApp.tsx # Sección de descarga de la app
│   │   ├── Contact.tsx   # Formulario de contacto
│   │   └── Footer.tsx    # Pie de página
│   │
│   ├── App.tsx           # Componente principal
│   ├── index.tsx         # Punto de entrada
│   └── index.css         # Estilos globales
│
├── tailwind.config.js    # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias y scripts
└── README.md             # Documentación
```

## Instalación y desarrollo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Apoloservicios/gym03.git
   cd gym03
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Compilación para producción

Para generar los archivos optimizados para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `build/`.

## Despliegue

Los archivos compilados pueden ser alojados en cualquier servidor web estático. Para desplegar en el mismo servidor que el sistema MultiGym, simplemente copia el contenido de la carpeta `build/` al directorio correspondiente.

## Personalización

### Colores

Los colores principales se pueden modificar en el archivo `tailwind.config.js`.

### Imágenes

Reemplaza las imágenes de marcador de posición en la carpeta `public/` con tus propias imágenes:

- `logo.svg` - Logo de MultiGym
- `logo-white.svg` - Logo blanco para el footer
- `hero-bg.jpg` - Imagen de fondo del banner principal
- `app-mockup.png` - Mockup de la aplicación móvil
- `platform-mockup.png` - Mockup de la plataforma web

## Licencia

Este proyecto es privado y para uso exclusivo de MultiGym.