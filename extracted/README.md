# Componentes Extraídos

Este directorio contiene los componentes y estilos extraídos de las secciones solicitadas.

## Componentes

### 1. AdvantagesSection-extracted.tsx
Componente de la sección "Descubre las ventajas y beneficios RP Estate"

**Características:**
- Sección con scroll snap y transiciones suaves
- Fondo sticky con imágenes que cambian según el scroll
- Contenido con efectos de parallax y opacidad
- 4 ventajas con animaciones de entrada

**Dependencias:**
- React hooks: `useState`, `useEffect`, `useRef`
- Requiere un contenedor con id `snap-container` en el HTML principal
- Requiere las clases CSS de `styles-extracted.css`

### 2. BrandingCarousel-extracted.tsx
Componente del carrusel de branding del footer

**Características:**
- Carrusel infinito horizontal con animación de scroll
- Efectos hover (opacidad y escala de grises)
- Lista de marcas aliadas duplicada para efecto continuo

**Dependencias:**
- Requiere la animación CSS `animate-scroll` de `styles-extracted.css`

## Estilos

### styles-extracted.css
Contiene todos los estilos necesarios para ambos componentes:

1. **Animación de scroll** (`@keyframes scroll` y `.animate-scroll`)
   - Para el carrusel de branding
   - Duración: 40s, movimiento infinito

2. **Scroll Snap utilities**
   - `.snap-container` - Contenedor principal con scroll snap
   - `.snap-section` - Secciones con snap
   - `.snap-mandatory-active` - Modo obligatorio de snap

3. **Variables CSS y clases de utilidad**
   - Colores personalizados (gold, dark, dark-accent)
   - Fuentes (serif, display, sans)

## Configuración Tailwind

Los componentes utilizan clases de Tailwind CSS. Asegúrate de tener configurado:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': '#F3E5AB',
        dark: '#050505',
        'dark-accent': '#111111',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
    },
  },
}
```

## Fuentes necesarias

Los componentes requieren estas fuentes de Google Fonts:
- Playfair Display (serif)
- Cinzel (display)
- Manrope (sans)

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

## Uso

1. Importa los componentes en tu aplicación
2. Incluye `styles-extracted.css` en tu HTML o importa en tu CSS principal
3. Asegúrate de tener un contenedor con `id="snap-container"` para AdvantagesSection
4. Configura Tailwind con los colores y fuentes personalizados

## Ejemplo de uso

```tsx
import AdvantagesSection from './extracted-components/AdvantagesSection-extracted';
import BrandingCarousel from './extracted-components/BrandingCarousel-extracted';

function App() {
  return (
    <div id="snap-container">
      <AdvantagesSection />
      {/* ... otros componentes ... */}
      <footer>
        <BrandingCarousel />
      </footer>
    </div>
  );
}
```
