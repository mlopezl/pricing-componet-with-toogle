
# Frontend Mentor - Solución del Componente de Precios con Toggle

Esta es mi solución al desafío **Pricing Component With Toggle** de Frontend Mentor. Este proyecto se enfoca en construir un componente de precios totalmente responsive e interactivo utilizando HTML semántico, CSS moderno y JavaScript vanilla.

El desafío fue una gran oportunidad para practicar layouts responsivos, componentes toggle personalizados, manipulación del DOM, mejoras de accesibilidad y arquitectura frontend escalable sin utilizar frameworks o librerías externas.

---

## Tabla de contenidos
- [Descripción general](#descripción-general)
- [El desafío](#el-desafío)
- [Diseño](#diseño)
- [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
- [Construido con](#construido-con)
- [Lo que aprendí](#lo-que-aprendí)

---

## Descripción general
Este proyecto es un componente de precios responsive que permite a los usuarios cambiar entre planes de pago anuales y mensuales mediante un toggle personalizado.

La aplicación actualiza dinámicamente los precios según la opción seleccionada, manteniendo una experiencia de usuario limpia y accesible.

La interfaz es completamente responsive y se adapta correctamente a dispositivos desktop, tablet y móviles.

Todos los estilos fueron construidos utilizando técnicas modernas de CSS como Flexbox, variables CSS, gradientes y media queries, mientras que la interactividad fue implementada usando JavaScript vanilla mediante manipulación del DOM y programación orientada a eventos.

---

## El desafío
Los usuarios deben poder:

- Ver el layout óptimo dependiendo del tamaño de pantalla de su dispositivo.
- Alternar entre precios anuales y mensuales.
- Ver cómo los precios se actualizan dinámicamente.
- Experimentar estados hover y focus en los elementos interactivos.
- Navegar por la interfaz utilizando el teclado.
- Visualizar un diseño responsive y accesible en diferentes dispositivos.
- Interactuar con un componente toggle completamente personalizado.

---

## Diseño

- Diseño Desktop Anual

<img src="./design/desktop-design-annually.jpg" alt="Vista desktop" width="600">

- Diseño Desktop Mensual

<img src="./design/desktop-design-annually.jpg" alt="Vista desktop" width="600">

- Estados Activos

<img src="./design/active-states.jpg" alt="Estados activos" width="600">

- Diseño Mobile Anual

<img src="./design/mobile-design-annually.jpg" alt="Vista mobile" width="200">

- Diseño Mobile Mensual

<img src="./design/mobile-design-monthly.jpg" alt="Vista mobile" width="200">

---

## Enlaces
- URL de la solución: [Repositorio en GitHub](https://github.com/mlopezl/pricing-componet-with-toogle)
- URL del sitio en vivo: [Demo en vivo](https://mlopezl.github.io/pricing-componet-with-toogle/)

---

## Mi proceso
- Estructuré el layout utilizando elementos semánticos de **HTML5** como `header`, `main` y `article`.
- Seguí un enfoque **mobile-first**, mejorando progresivamente el diseño mediante media queries.
- Construí layouts responsivos utilizando **Flexbox** para alineación y espaciado.
- Utilicé **variables CSS (custom properties)** para crear un sistema de diseño reutilizable y escalable.
- Apliqué una estructura basada en componentes para tarjetas, botones, secciones de precios y elementos toggle.
- Utilicé gradientes, sombras y técnicas modernas de espaciado para mejorar la jerarquía visual.
- Creé un toggle switch completamente personalizado usando HTML y CSS.
- Implementé actualizaciones dinámicas de precios mediante **manipulación del DOM**.
- Añadí interactividad utilizando event listeners de JavaScript:
  - `change`
  - `click`
  - `keydown`
  - `focusin`
- Mejoré la accesibilidad permitiendo navegación mediante teclado e interacciones focus.
- Utilicé **event delegation** para gestionar eficientemente los estados focus de las tarjetas.
- Gestioné estados visuales dinámicos mediante manipulación de clases usando `classList`.
- Mantuve separación de responsabilidades entre estructura (HTML), estilos (CSS) y comportamiento (JavaScript).

---

## Construido con
- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- Variables CSS (custom properties)
- Flujo de trabajo mobile-first
- Principios de diseño responsive
- Convención de nombres inspirada en BEM
- Manipulación del DOM
- Event listeners
- Event delegation
- Accesibilidad por teclado
- Gradientes CSS
- Transiciones CSS
- Media queries

---

## Lo que aprendí
- Estructurar layouts responsivos utilizando **HTML5 semántico**.
- Construir interfaces modernas y responsivas con **Flexbox**.
- Organizar CSS escalable utilizando convenciones reutilizables.
- Crear sistemas de diseño reutilizables mediante **variables CSS**.
- Construir componentes UI personalizados como toggle switches.
- Actualizar dinámicamente contenido de la interfaz mediante **manipulación del DOM**.
- Gestionar estados de UI utilizando JavaScript y clases CSS.
- Mejorar accesibilidad mediante interacciones de teclado y manejo de focus.
- Utilizar **event delegation** para simplificar la lógica de manejo de eventos.
- Crear layouts responsivos utilizando un enfoque **mobile-first**.
- Mejorar la experiencia de usuario con efectos hover, transiciones, gradientes y feedback visual.
- Escribir código frontend limpio, modular y mantenible sin frameworks.
