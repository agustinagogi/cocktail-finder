# 🍹 CocktailFinder - React Avanzada
¡Una aplicación web elegante y sencilla construida con React para explorar el mundo de los cócteles! Busca tus bebidas favoritas, obtén los ingredientes y aprende a prepararlas. Este proyecto fue creado para demostrar habilidades fundamentales en el desarrollo front-end con React.

**Pruebala aquí:** https://cocktail-finder-plum.vercel.app

## Demostración Interactiva
![Demostración app cocktail finder](/demostracion-cocktail-finder.gif)

## Filosofía del Proyecto y Enfoque Técnico
El objetivo era construir una aplicación robusta, escalable y con una excelente experiencia de usuario. Me enfoqué en tres pilares clave:

- **Experiencia de Usuario (UX) Primero:** Desde el diseño mobile-first hasta el renderizado condicional que maneja los estados de carga y error, cada decisión fue tomada pensando en ofrecer una navegación fluida e intuitiva.

- **Código Limpio y Escalable:** Utilicé una arquitectura basada en componentes funcionales y Hooks de React para mantener el código modular, reutilizable y fácil de mantener. El estado se gestiona de forma centralizada donde es necesario, siguiendo las mejores prácticas.

- **Flujo de Trabajo Moderno (DevOps):** El proyecto está integrado con un flujo de CI/CD (Integración y Despliegue Continuo) a través de Vercel. Cada push a la rama main despliega automáticamente una nueva versión, asegurando agilidad y fiabilidad.

## Stack Tecnológico y Arquitectura
Para construir este proyecto, seleccioné un conjunto de herramientas modernas y eficientes:

- **Framework Principal:** React (Hooks)

- **useState:** Para una gestión de estado local, declarativa y predecible.

- **useEffect:** Para manejar efectos secundarios como las llamadas a la API, controlando el ciclo de vida del componente y optimizando las peticiones.

- **Manejo de Asincronía:** JavaScript (ES6+) async/await para consumir la API de TheCocktailDB de una manera limpia y legible, incluyendo un manejo de errores robusto con bloques try...catch.

- **Diseño y Estilado:** CSS Moderno

- Implementación de un diseño responsive utilizando **Flexbox y CSS Grid**.

- **Enfoque Mobile-First**, garantizando una experiencia óptima en cualquier dispositivo.

- **Despliegue y Hosting:** Vercel

- Configuración de un pipeline de CI/CD para despliegues automáticos desde GitHub.

- Hosting global de alto rendimiento para una carga rápida de la aplicación.

## Desafíos y Soluciones
Durante el desarrollo, uno de los desafíos interesantes fue normalizar los datos de la API. Los ingredientes y sus medidas venían en hasta 15 propiedades separadas (strIngredient1, strMeasure1, etc.).

**Solución:** Creé una función de utilidad dentro del componente CocktailDetail que itera dinámicamente sobre estas propiedades, las une y las transforma en un único array de [medida, ingrediente], que es mucho más fácil de renderizar. Esto demuestra mi capacidad para manipular datos complejos y presentarlos de forma limpia.

## Posibles Mejoras Futuras
Este proyecto tiene una base sólida, pero siempre pienso en cómo llevarlo al siguiente nivel. Los siguientes pasos podrían incluir:

✅ **Pruebas Unitarias:** Implementar Jest y React Testing Library para asegurar la fiabilidad de los componentes.

💡 **Gestión de Estado Avanzada:** Integrar Context API o Redux Toolkit para manejar estados globales más complejos si la aplicación creciera (ej. favoritos, temas).

⚡ **Optimización de Rendimiento:** Implementar React.memo en componentes y virtualización de listas para búsquedas con cientos de resultados.

## Hablemos
Estoy buscando activamente oportunidades donde pueda aportar mi pasión por el desarrollo front-end y seguir creciendo profesionalmente. Si mi trabajo te ha parecido interesante y crees que podría encajar en tu equipo, me encantaría conectar.

📧 Email: agustinatgg@gmail.com

Gracias por tu tiempo y por revisar mi proyecto.
