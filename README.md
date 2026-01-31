### 🚀 Portfolio Personal - Samuel Pérez Carballo
Bienvenido al repositorio de mi portfolio personal. Esta aplicación es una plataforma interactiva que muestra mi trayectoria como Desarrollador de Videojuegos para Nintendo Switch y mi evolución hacia el Desarrollo Web Fullstack.

### 🛠️ Tecnologías Utilizadas
Este proyecto ha sido construido utilizando un stack moderno enfocado en el rendimiento y la estética:

+ ***Vue.js 3***: Framework progresivo de JavaScript.

+ ***Tailwind CSS***: Framework de CSS basado en utilidades para un diseño totalmente personalizado sin hojas de estilo externas.

+ ***PrimeVue***: Biblioteca de componentes de UI de alta calidad para Vue.

+ ***Vite***: Herramienta de construcción rápida para el desarrollo frontend.

+ ***JSON***: Los datos de proyectos, formación y experiencia están centralizados en un archivo JSON para facilitar el mantenimiento.

### 📋 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

Node.js (Versión 18 o superior recomendada).

Un gestor de paquetes como npm o yarn.

### ⚙️ Instalación y Configuración
Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno local:

#### 1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando:
```
git clone https://github.com/tu-usuario/nombre-del-repo.git
```

#### 2. Acceder al directorio
```
cd nombre-del-repo
```
#### 3. Instalar dependencias
Instala todas las bibliotecas necesarias (Vue, Tailwind, PrimeVue, etc.):

```
npm install
```

### 🚀 Despliegue y Desarrollo
Ejecutar en modo desarrollo
Para ver la página localmente con recarga en vivo:


```
npm run dev
```
La aplicación estará disponible en http://localhost:5173.

### Construir para producción
Para generar los archivos optimizados listos para desplegar en un servidor (como Vercel, Netlify o GitHub Pages):

```
npm run build
```

Los archivos se generarán en la carpeta dist/.

### 🗺️ Guía de Navegación
La aplicación está organizada en secciones clave accesibles desde el Header Component:

+ ***Inicio (MainView)***: Un resumen ejecutivo con acceso directo a las secciones más importantes mediante tarjetas interactivas.

+ ***Proyectos***: Listado detallado de mis trabajos en Nintai Studios, incluyendo títulos como Torched para Nintendo Switch.

+ ***Formación***: Mi recorrido académico, desde SMR y DAM hasta mi actual formación en DAW.

+ ***Experiencia***: Historial profesional incluyendo mi etapa en Teidagua y mi puesto actual como desarrollador.

+ ***Contacto***: Formulario integrado para consultas profesionales.

### 📁 Estructura de Datos
Para actualizar la información de la web, solo necesitas editar el archivo: ``src/data/portfolio.json``.

Cada entrada de proyecto soporta una clave route para enlazar directamente a páginas externas o detalles específicos.