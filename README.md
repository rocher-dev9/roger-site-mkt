# Portfolio — Roger Avellana

Estructura modular del portfolio (versión `montone.studio` adaptada).

## 📁 Archivos

```
portfolio/
├── index.html         ← Shell HTML mínimo. Carga el resto.
├── styles.css         ← Todos los estilos (tokens, layout, animaciones, responsive).
├── data.js            ← Contenido editable: nombre, bio, servicios, proyectos…
├── sections.jsx       ← Componentes React de cada sección (Nav, Hero, Work…).
├── app.jsx            ← App raíz, lógica del panel Tweaks y montaje.
├── tweaks-panel.jsx   ← Sistema de controles del panel Tweaks.
└── README.md          ← (este archivo)
```

## ✏️ Qué editar para qué cambio

| Quieres cambiar… | Edita… |
|---|---|
| Tu nombre, bio, email, ubicación, año | `data.js` → propiedades raíz del objeto `DATA` |
| Los 5 servicios numerados (01–05) | `data.js` → array `services` |
| Los proyectos del carrusel | `data.js` → array `projects` |
| Las citas de testimonios | `data.js` → array `testimonials` |
| El skillset / toolbox | `data.js` → array `skills` |
| Los enlaces externos (videos, talks…) | `data.js` → array `links` |
| Colores, tipografía, tamaños, espaciados | `styles.css` → variables CSS en `:root` |
| Modo dark | `styles.css` → bloque `[data-mode="dark"]` |
| Estructura visual de un bloque (Hero, Work…) | `sections.jsx` |
| Qué controles aparecen en el panel Tweaks | `app.jsx` → función `MyTweaks` |
| Valores iniciales del panel Tweaks | `app.jsx` → constante `TWEAK_DEFAULTS` |

## 🚀 Cómo abrirlo

Solo abre `index.html` en un navegador moderno. No necesita servidor ni build:
React + Babel compilan el JSX directamente desde un CDN.

> ⚠️ **Para producción** conviene compilar los `.jsx` a `.js` con Vite o
> esbuild para evitar la dependencia de Babel en runtime (más rápido,
> sin warnings de consola).

## 🎨 Sistema de diseño

- **Colores:** definidos como CSS variables. Cambia `--accent` desde el
  panel Tweaks o directamente en `styles.css`.
- **Tipografía:**
  - `Inter Tight` — UI, títulos
  - `Instrument Serif` — itálicas decorativas
  - `JetBrains Mono` — metadatos, números
- **Recurso gráfico recurrente:** el slash `/` siempre va en color de
  acento (clase `.slash`).

## 🌗 Modo claro/oscuro

El atributo `data-mode` del `<body>` controla el tema:
- `data-mode="light"` (por defecto)
- `data-mode="dark"`

Se cambia en vivo desde el panel Tweaks.

## 📦 Recursos externos

Para que funcione **sin conexión** usa la versión empaquetada:
`Roger Avellana — Portfolio.html` (un solo archivo de ~1.7 MB).
