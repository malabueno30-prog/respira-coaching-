# Respira Coaching — Web estática

Web de coaching de salud y bienestar, lista para publicarse gratis en GitHub Pages y monetizarse con Google AdSense.

## Estructura

```
index.html          Página de inicio
blog.html            Listado de artículos
about.html           Sobre mí
contact.html         Formulario de contacto (Formspree)
posts/               Artículos individuales del blog
css/styles.css       Estilos
js/main.js           Menú móvil + animación
sitemap.xml          Mapa del sitio para Google
robots.txt           Indicaciones para buscadores
ads.txt              Verificación requerida por AdSense
```

## 1. Publicar en GitHub Pages (gratis)

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, público, por ejemplo `respira-coaching`.
3. Sube todos los archivos de esta carpeta a ese repositorio (puedes arrastrarlos directamente desde la web de GitHub con "Add file → Upload files", o usar `git`).
4. En el repositorio, ve a **Settings → Pages**.
5. En "Source" elige la rama `main` y la carpeta `/ (root)`. Guarda.
6. En unos minutos tu web estará en:
   `https://TU-USUARIO.github.io/respira-coaching/`

Si quieres que sea `https://TU-USUARIO.github.io/` directamente (sin subcarpeta), nombra el repositorio exactamente `TU-USUARIO.github.io`.

## 2. Cambiar el dominio en el código

El sitio tiene puesto `https://malabueno30-prog.github.io/respira-coaching/` como placeholder en varios sitios (SEO, sitemap, etc). Búscalo y sustitúyelo por tu URL real de GitHub Pages en:
- Cada `<link rel="canonical">` de cada página
- `sitemap.xml`
- `robots.txt`

## 3. Activar el formulario de contacto

GitHub Pages no tiene backend, así que `contact.html` usa [Formspree](https://formspree.io) (plan gratuito, hasta 50 envíos/mes):
1. Crea una cuenta gratuita en formspree.io.
2. Crea un formulario nuevo y copia el ID que te dan.
3. En `contact.html`, sustituye `TU_ID_DE_FORMSPREE` en la línea `action="https://formspree.io/f/TU_ID_DE_FORMSPREE"`.

## 4. Activar Google AdSense

1. Solicita una cuenta en [google.com/adsense](https://www.google.com/adsense). Necesitas la web ya publicada y con algo de contenido (ya la tienes).
2. Google revisa el sitio — puede tardar de días a semanas, y normalmente pide más tráfico/contenido antes de aprobar.
3. Cuando te den tu ID de publisher (formato `pub-1234567890123456`):
   - Sustitúyelo en **todas** las etiquetas `<script ... client=ca-pub-6882361228091192>` de cada página.
   - Sustitúyelo también en `ads.txt` (reemplaza `pub-XXXXXXXXXXXXXXXX`).
4. Los bloques marcados como `<div class="ad-slot">Espacio publicitario</div>` dentro de los artículos son los sitios recomendados para insertar tus bloques de anuncios `<ins class="adsbygoogle">` una vez aprobado.

## 5. Seguir creciendo el contenido

El tráfico de búsqueda (y por tanto los ingresos por anuncios) depende directamente del número de artículos indexados por Google. Recomiendo:
- Publicar artículos nuevos con regularidad (1–2 por semana al principio).
- Seguir la misma estructura que los 3 artículos de ejemplo en `posts/` (meta description, `canonical`, JSON-LD `Article`).
- Añadir cada nuevo artículo también a `blog.html`, `index.html` y `sitemap.xml`.
- Registrar el sitio en [Google Search Console](https://search.google.com/search-console) y enviar el `sitemap.xml` ahí para que Google lo rastree más rápido.

## Notas

- Los tres artículos incluidos son contenido genérico de bienestar (higiene del sueño, gestión del estrés, hábitos). No sustituyen asesoramiento médico — el sitio ya incluye ese aviso en "Sobre mí".
- Todo el sitio es HTML/CSS/JS estático: no necesita bases de datos ni hosting de pago.
