# HidalSoft – Sitio Web Corporativo

Sitio web corporativo desarrollado con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, enfocado en presentar soluciones de software empresarial con un diseño moderno, alto rendimiento y buenas prácticas de SEO.

---

## Tecnologías utilizadas

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **PostCSS**
- **pnpm** (gestor de dependencias)

---

## Estructura del proyecto

```bash
.
├── app/                # Rutas, layouts y páginas (App Router)
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal
├── components/         # Componentes reutilizables
├── hooks/              # Custom hooks
├── lib/                # Utilidades y lógica compartida
├── public/             # Assets estáticos
├── styles/             # Estilos adicionales
├── next.config.mjs     # Configuración de Next.js
├── tailwind.config.ts  # Configuración de Tailwind
├── postcss.config.mjs  # Configuración de PostCSS
├── tsconfig.json       # Configuración de TypeScript
├── package.json        # Dependencias y scripts
├── pnpm-lock.yaml      # Lockfile de pnpm
└── README.md
````

---

## Instalación y uso

### Requisitos

* **Node.js** ≥ 18
* **pnpm** instalado

### Instalación

```bash
pnpm install
```

### Entorno de desarrollo

```bash
pnpm dev
```

### Build de producción

```bash
pnpm build
```

### Preview de producción

```bash
pnpm start
```

---

## Características

* Arquitectura moderna con **App Router**
* Código totalmente tipado con **TypeScript**
* Diseño **responsive y mobile-first**
* Optimización de rendimiento y SEO
* Componentes reutilizables y escalables
* Preparado para despliegue continuo

---

## Despliegue

El proyecto está configurado para ser desplegado en **Netlify**, utilizando el plugin oficial de Next.js, con soporte para renderizado server-side y optimización de assets estáticos.

---

## Notas

* Se recomienda mantener actualizadas las dependencias para evitar vulnerabilidades de seguridad.
* Usar `pnpm up` para actualizar paquetes de forma controlada.

---

## Licencia

Este proyecto es propiedad de **HidalSoft**.
Todos los derechos reservados © 2025.
