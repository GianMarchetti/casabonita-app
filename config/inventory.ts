import { Image } from "sanity"

export interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}



export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "Tapíz_Macramé_Boho_1",
    name: "Tapíz Macramé Boho",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé Boho esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 300000,
    image:
      "https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
    images: [
      "https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
      "https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
      "https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "Macramé_Sobremesa_1",
    name: "Macramé Sobremesa",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé Sobremesa esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 450000,
    image:
      "https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
    images: [
      "https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
      "https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
      "https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "Tapíz_Macramé XL_1",
    name: "Tapíz Macramé Lelis",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé XL esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 500000,
    image:
      "https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
    images: [
      "https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
      "https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
      "https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "Tapíz_Macrame_Greta_1",
    name: "Tapíz Macrame Greta",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé XS esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 350000,
    image:
      "https://i.postimg.cc/SsKddvWF/Macrame-XS.jpg",
    images: [
      "https://i.postimg.cc/SsKddvWF/Macrame-XS.jpg",
      "https://i.postimg.cc/SsKddvWF/Macrame-XS.jpg",
      "https://i.postimg.cc/SsKddvWF/Macrame-XS.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "Guirnalda Macramé_1",
    name: "Guirnalda Macramé",
    description: `Conocé tu nueva decoracion favorita. Nuestra Guirnalda Macramé esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 400000,
    image:
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    images: [
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "Macramé_Posavaso_1",
    name: "Macramé Posavaso",
    description: `Conocé tu nueva decoracion favorita. Nuestra Guirnalda Macramé esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 400000,
    image:
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    images: [
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "tapiz_trenzas_1",
    name: "Tapíz Trenzas",
    description: `Conocé tu nueva decoracion favorita. Nuestra Guirnalda Macramé esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 500999,
    image:
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    images: [
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "libpiclshg-7yhw5f2e47-phfbom1gx2",
    sku: "Taller_Presencial_Santa_Fe",
    name: "Taller presencial Santa Fe",
    description: "Taller de macramé, presencial en la ciudad de Santa Fe(ARG), en este taller vas a aprender a hacer macramé",
    price: 500000,
    image: "https://i.ibb.co/wLL4w84/taller-presencial6.jpg",
    images: [
      "https://i.ibb.co/wLL4w84/taller-presencial6.jpg",
      "https://i.ibb.co/NVvJ7Rj/taller-Presencial.jpg",
      "https://i.ibb.co/SVYcNhs/taller-presencial2.jpg",
      "https://i.ibb.co/tJYLzJ0/taller-presencial4.jpg",
    ],
    sizes: [],
    categories: ["taller"],
    colors: [],
    currency: "ARS",
  },
  {
    id: "z79jyz6d9t-4hv85xjpqp-sidi3cbmpr",
    sku: "Taller_Virtual_Macramé",
    name: "Taller virtual Macramé",
    description: "Taller de macramé virtual, nivel 1, 2 y 3 disponibles en este taller puedas aprender a hacer macramé",
    price: 500000,
    image: "https://i.ibb.co/N91ydLC/taller-Macrame.jpg",
    images: [
      "https://i.ibb.co/N91ydLC/taller-Macrame.jpg",
      "https://i.ibb.co/chWMNSx/taller-presencial3.jpg",
      "https://i.ibb.co/Bf6wZp4/taller-presencial4.jpg",

    ],
    sizes: [],
    categories: ["taller"],
    colors: [],
    currency: "ARS",
  },
  {
    id: "l2d8xkm0kn-x4isj9s87q-dqgj1jrmzx",
    sku: "Taller_macramé_virtual_personalizado",
    name: "Taller Macramé personalizado",
    description: "Taller virtual personalizado, coordinamos una fecha y horario para que tengas una hora personal para que en este taller puedas aprender a hacer macramé",
    price: 500000,
    image: "https://i.ibb.co/8PZP0H2/asesoria.jpg",
    images: [
      "https://i.ibb.co/8PZP0H2/asesoria.jpg",
      "https://i.ibb.co/chWMNSx/taller-presencial7.jpg",
      "https://i.ibb.co/Bf6wZp4/taller-presencial4.jpg",

    ],
    sizes: [],
    categories: ["taller"],
    colors: [],
    currency: "ARS",
  },
  {
    id: "libpiclshg-7yhw5f2e47-phfbom1gx2",
    sku: "Asesoría_decoración",
    name: "Asesoría de Decoración",
    description: "Asesoria de decoracion, renovamos tu casa",
    price: 1500000,
    image: "https://i.ibb.co/8PZP0H2/asesoria.jpg",
    images: [
      "https://i.ibb.co/8PZP0H2/asesoria.jpg",
      "https://i.ibb.co/N91ydLC/taller-Macrame.jpg",
      "https://i.ibb.co/7bL7yps/taller-presencial2.jpg",
      "https://i.ibb.co/vqQ9jVt/taller-presencial6.jpg",
    ],
    sizes: [],
    categories: ["asesoria"],
    colors: [],
    currency: "ARS",
  }
]

