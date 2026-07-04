// src/config/site.ts
// Configuración central del sitio: nav, textos base y las dos líneas de servicio.

export interface NavLink {
  href: string;
  label: string;
  id: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export const siteConfig = {
  name: "DatAImpulsa",
  domain: "dataimpulsa.cl",
  url: "https://dataimpulsa.cl",
  tagline: "Sitios web hiper rápidos con Astro",
  description:
    "Desarrollamos sitios web y landing pages modernos, ligeros y escalables con Astro: máximo rendimiento, SEO perfecto y experiencias increíbles. Además impulsamos tu negocio con automatización IA, web scraping y análisis de datos con Power BI.",
  email: "contacto@dataimpulsa.cl",
  phone: "+56 9 8857 4082",
  address: "Ahumada 236 Of. 501, Santiago",
  social: {
    linkedin: "https://www.linkedin.com/company/dataimpulsa",
  },
  web3formsKey: "a483aa31-f840-401c-bb54-e7ce5a0c209f",

  nav: [
    { href: "/#servicios", label: "Servicios", id: "servicios" },
    { href: "/#tecnologia", label: "Tecnologías", id: "tecnologia" },
    { href: "/portafolio", label: "Casos de Éxito", id: "portafolio" },
    { href: "/nosotros", label: "Nosotros", id: "nosotros" },
    { href: "/blog", label: "Recursos", id: "blog" },
  ] as NavLink[],

  cta: { label: "Agendar reunión", href: "/#contacto" },
  ctaData: { label: "Agendar diagnóstico de datos", href: "/#contacto" },

  services: {
    // Línea principal (~70%): desarrollo web con Astro
    web: {
      title: "Desarrollo web con Astro",
      description:
        "Sitios web y landing pages ultra rápidos, con SEO nativo y arquitectura moderna.",
      items: [
        {
          title: "Sitios web corporativos",
          description:
            "Presencia digital profesional que carga al instante y posiciona desde el código.",
        },
        {
          title: "Landing pages de alta conversión",
          description:
            "Páginas enfocadas en resultados: rápidas, claras y medibles.",
        },
        {
          title: "E-commerce y catálogos",
          description:
            "Tiendas y catálogos ligeros que convierten más porque no hacen esperar.",
        },
        {
          title: "Optimización y SEO técnico",
          description:
            "Core Web Vitals excelentes y mejor posicionamiento en buscadores.",
        },
      ] as ServiceItem[],
    },
    // Línea complementaria (~30%): datos e IA
    data: {
      title: "Datos e Inteligencia Artificial",
      description:
        "Más que sitios web: automatización, scraping y análisis para decidir con datos.",
      items: [
        {
          title: "Automatización con IA",
          description:
            "Agentes, RPA y flujos automatizados que ahorran horas de trabajo manual.",
        },
        {
          title: "Web Scraping",
          description:
            "Monitoreo de precios, competencia y catálogos, siempre actualizado.",
        },
        {
          title: "Power BI & Análisis de datos",
          description:
            "Dashboards, DAX y ETL para transformar tus datos en decisiones.",
        },
        {
          title: "Visualización de datos",
          description:
            "Reportes claros y accionables que cualquiera en tu equipo entiende.",
        },
      ] as ServiceItem[],
    },
  },
};
