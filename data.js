/**
 * Datos de contenido del portfolio.
 * Edita este archivo para cambiar textos, servicios, proyectos y testimonios.
 * No hay lógica aquí — solo contenido.
 */
window.DATA = {
  brand: "roger",
  brandSlash: "studio",
  fullName: "Roger Avellana",
  role: "visual designer & marketing assistant",
  intro: "ayudo a marcas a convertir el ruido visual en claridad",
  introBold: "interfaces afiladas, identidades coherentes y comunicación que conecta.",
  location: "Igualada · Catalunya",
  year: "2026",
  email: "hola@rogeravellana.com",
  linkedin: "https://www.linkedin.com/in/roger-avellana/",

  /* ── Servicios (accordion 01–05) ─────────────────────────── */
  services: [
    {
      num: "01",
      title: "diseño visual & dirección creativa",
      desc: "Desde el concepto hasta la pieza final. Doy forma al lenguaje visual de tu marca — tipografía, color, composición y sistema gráfico — para que cada punto de contacto hable el mismo idioma. Pienso en la marca como un sistema vivo, no como un logotipo aislado."
    },
    {
      num: "02",
      title: "branding & identidad corporativa",
      desc: "Construyo identidades que escalan: del símbolo a la guía de marca completa. Diseño piezas que no se quedan en lo bonito — funcionan en papel, en pantalla, en un stand de feria y en un story de Instagram. Coherencia visual en todos los formatos."
    },
    {
      num: "03",
      title: "ui/ux & diseño de interfaces",
      desc: "Diseño interfaces que se entienden a la primera. Wireframes, prototipos y diseño final en Figma — con foco en jerarquía, accesibilidad y flujos claros. He trabajado con plataformas IoT, dashboards industriales y portales B2B donde la usabilidad no es opcional."
    },
    {
      num: "04",
      title: "marketing digital & contenido",
      desc: "Estrategia y ejecución para redes sociales y campañas publicitarias. Calendarios editoriales, packs de posts, análisis de métricas. Diseño pensando en el feed, no solo en la pieza individual — coherencia visual y narrativa en el tiempo."
    },
    {
      num: "05",
      title: "ia aplicada al diseño",
      desc: "Uso Claude, ChatGPT y Gemini como herramientas para acelerar el proceso, no para sustituir el criterio. Investigación, ideación, redacción y prototipado asistido. Iteraciones que antes tomaban semanas hoy se resuelven en días."
    },
  ],

  /* ── Proyectos (carrusel horizontal) ─────────────────────── */
  projects: [
    { id:1, num:"01", title:"intera — identidad corporativa", cat:"branding", desc:"Rediseño completo de la identidad visual: logotipo, paleta, tipografía y sistema de marca aplicado a todos los materiales corporativos.", year:"2024", color:"#504FED", href:"#" },
    { id:2, num:"02", title:"ayuntamiento de igualada — campañas", cat:"marketing", desc:"Diseño y ejecución de materiales gráficos para campañas municipales: cartelería, banners digitales y publicaciones en redes.", year:"2018–2019", color:"#D9482C", href:"#" },
    { id:3, num:"03", title:"sensing & control — dashboard iot", cat:"ui/ux", desc:"Diseño de interfaz para plataforma de monitorización IoT. Visualización de datos en tiempo real con foco en usabilidad operativa.", year:"2019–2021", color:"#0E8A5A", href:"#" },
    { id:4, num:"04", title:"nvision — ferias internacionales", cat:"diseño", desc:"Producción de materiales para ferias de I+D: stands, roll-ups, folletos técnicos y presentaciones corporativas.", year:"2021–2023", color:"#E0A82E", href:"#" },
    { id:5, num:"05", title:"intera — estrategia digital", cat:"marketing", desc:"Planificación de contenido para redes sociales: calendario editorial, packs de posts y análisis de métricas mensuales.", year:"2023–2026", color:"#7A5BD8", href:"#" },
  ],

  /* ── Testimonios ─────────────────────────────────────────── */
  testimonials: [
    { text: "Roger combina criterio visual y estratégico de una forma poco habitual. Entiende la marca como sistema, no como una colección de piezas sueltas.", name: "Cliente · INTERA", role: "Marketing Manager" },
    { text: "Trabajar con Roger en las ferias internacionales fue clave. Capaz de traducir tecnología compleja en materiales que cualquiera entendía.", name: "Equipo · nVision Systems", role: "R&D Lead" },
    { text: "Atento al detalle, ordenado y proactivo. Aporta soluciones cuando los demás solo ven problemas — y siempre con calma.", name: "Compañero · Sensing & Control", role: "Project Manager" },
    { text: "Las campañas que diseñó para el ayuntamiento funcionaron porque no eran solo bonitas — eran legibles, claras y respetaban el tono institucional.", name: "Colaboración · Ayuntamiento", role: "Comunicación" },
    { text: "Honesto, curioso y con muchas ganas. La combinación de diseño + marketing + IA lo convierte en un perfil muy completo para equipos pequeños.", name: "Mentor", role: "Senior Designer" },
  ],

  /* ── About ───────────────────────────────────────────────── */
  about: "/me llamo roger avellana. diseñador desde 2016, ahora también marketing. catalán de igualada. me apasiona el momento en que un proyecto deja de ser una idea borrosa y empieza a tener forma. más obsesionado con el proceso que con el resultado final.",

  /* ── Enlaces externos ────────────────────────────────────── */
  links: [
    { kind: "video",    title: "caso de estudio — rediseño intera",       href: "#" },
    { kind: "artículo", title: "diseñar con ia: lo que aprendí en 6 meses", href: "#" },
    { kind: "talk",     title: "branding para pymes — lo importante",     href: "#" },
    { kind: "podcast",  title: "diseño + marketing — un buen mix",        href: "#" },
  ],

  /* ── Toolbox (skills) ────────────────────────────────────── */
  skills: [
    "adobe photoshop", "adobe illustrator", "adobe indesign", "figma",
    "branding", "ui/ux design", "marketing digital", "redes sociales",
    "claude ai", "chatgpt", "gemini",
    "microsoft excel", "microsoft word", "google workspace"
  ],
};
