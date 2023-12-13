export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Casa Bonita",
  description: "El espacio preferido de tu hogar",
  footer: [
    { name: "Inicio", href: "/" },
    { name: "Blog", href: "https://www.instagram.com/yas.casabonita/" },
    { name: 'Productos', href: "/components/products" },
    { name: 'Macramé', href: "/components/macrame" },
    { name: 'Asesorias', href: "/components/asesorias" },
    { name: 'Talleres', href: "/components/talleres" },
    { name: 'Contacto', href: "/components/contact" },
    { name: 'Guias Gratis', href: "/components/guias" }
  ],
}
