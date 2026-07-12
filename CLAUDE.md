# CLAUDE.md — dataimpulsa.cl

Sitio corporativo de DatAImpulsa (PYMEs y sector público chileno). Dos líneas de
servicio: desarrollo web con Astro (~70%) y datos/IA — automatización, scraping,
Power BI (~30%).

## Stack

- **Astro 5** en modo SSG (`output: "static"`), integraciones MDX + sitemap.
- **Tailwind CSS v4** vía `@tailwindcss/vite` (NO hay `tailwind.config`; el theme
  vive en `@theme` dentro de `src/styles/global.css`).
- **Deploy:** Cloudflare Pages (`npm run build` → `dist/`; `public/_headers` y
  `public/_redirects` se copian al build).
- **Formularios:** Web3Forms (key en `src/config/site.ts` → `web3formsKey`).
- Blog en `src/content/` (content collections, config en `src/content.config.ts`).

## Formularios y conversión (Web3Forms + GTM)

- **POST nativo, NUNCA AJAX/fetch**: el submit AJAX rompe el trigger de
  conversión en GTM (la conversión depende del pageview de `/gracias/`).
- Campo oculto `redirect` → `/gracias/`. Web3Forms exige URL absoluta; el valor
  estático apunta a producción y un script lo ajusta a `location.origin` para
  que funcione también en previews `.pages.dev`.
- La página `/gracias/` (con `noindex`) es la ÚNICA que dispara el evento
  `form_conversion` en `dataLayer` (Custom Event para GTM, no triggers
  nativos). El form NO dispara eventos por sí mismo.
- GTM aún NO tiene contenedor instalado en el Layout; el push a `dataLayer`
  queda preparado para cuando se agregue.
- Incluir siempre `<input type="hidden" name="subject" value="...">`.
- **NO usar `ccemail`**: no funciona en el plan free de Web3Forms.

## Reglas de código

- **Cero inline styles** (`style="..."`). Usar utilidades Tailwind o `<style>`
  scoped del componente.
- **Colores SIEMPRE por CSS variables** definidas en `@theme` de `global.css`.
  - Vars con nombre semántico (`--color-accent`, `--color-card`…) generan
    utilidades nativas: `bg-accent`, `text-accent-light`, etc. Preferirlas.
  - Para vars sin utilidad directa usar la sintaxis v4 con paréntesis:
    `bg-(--color-card)`, `text-(--color-text-secondary)`.
  - ⚠️ NUNCA la sintaxis de corchetes `bg-[--color-card]`: en Tailwind v4
    compila a `background-color: --color-card` (CSS inválido, se descarta).
- **Hero con `background-image` por CSS, NO `<img>`.**
- Paleta: fondo negro casi puro (`#0A0A0A` base, `#0D0D0D` superficies), acento
  naranja (`#F97316` primario, `#EA580C` hover, `#FB923C` claro). Dark theme es
  la estética principal; existe toggle light (`html.light` redefine las vars).
  Los alias `--color-purple-*` son legacy y apuntan a la escala naranja.
- Config central en `src/config/site.ts` (nav, CTAs, servicios, contacto,
  redes). No hardcodear esos datos en componentes.
- Aliases de import: `@/*` → `src/*`, `@components/*`, `@layouts/*`, `@assets/*`.
- Logo: `public/logo-nuevo-dataimpulsa.png` (dark) / `public/images/logo/light.png` (light).

## Workflow

- **Conventional commits** en español (`feat:`, `fix:`, `chore:`…).
- `git add .` antes de cada commit (el zip de cliente en
  `src/components/layout/` está en `.gitignore`).
- Verificar con `npm run build` antes de dar por cerrado un cambio.
- Componentes de sección en `src/components/sections/`, layout en
  `src/components/layout/`. Los no usados en el home (Comparison, Areas, Team,
  Testimonials) siguen en el repo para otras páginas o reutilización.
