import { Image } from "sanity"

interface InventoryProduct {
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
    sku: "Macramé_Boho_1",
    name: "Macramé Boho XS",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé Boho esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 400000, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
    images: [
      "https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "Macramé Sobremesa_1",
    name: "Macramé Sobremesa",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé Sobremesa esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 450000,
    image:
      "https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
    images: [
      "https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "Macramé XL_1",
    name: "Macramé XL",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé XL esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 500000,
    image:
      "https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
    images: [
      "https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "Macrame XS_1",
    name: "Macrame XS",
    description: `Conocé tu nueva decoracion favorita. Nuestro Macramé XS esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 350000,
    image:
      "https://i.postimg.cc/SsKddvWF/Macrame-XS.jpg",
    images: [
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
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "Guirnalda Macramé_1",
    name: "Guirnalda Macramé",
    description: `Conocé tu nueva decoracion favorita. Nuestra Guirnalda Macramé esta realizado en hilo macrame de algodón premium, tejido a mano.`,
    price: 400000,
    image:
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    images: [
      "https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
    ],
    sizes: ["one-size"],
    categories: ["macrame"],
    colors: ["beige"],
    currency: "ARS",
  },
  // ,
  // {
  //   id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
  //   sku: "down_mittens_1",
  //   name: "Down Mittens",
  //   description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
  //   price: 13999,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
  //   ],
  //   sizes: ["s", "m", "l", "xl"],
  //   categories: ["gloves"],
  //   colors: ["black"],
  //   currency: "ARS",
  // },
  // {
  //   id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
  //   sku: "brooks_sunglasses_1",
  //   name: "Brooks Sunglasses",
  //   description: `These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
  //   price: 42000,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["sunglasses"],
  //   colors: ["yellow"],
  //   currency: "ARS",
  // },
  // {
  //   id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
  //   sku: "dock_sunglasses_1",
  //   name: "Dock Sunglasses",
  //   description: `Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame, and all at a price that won't break the bank. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.`,
  //   price: 5599,
  //   image:
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
  //   images: [
  //     "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
  //   ],
  //   sizes: ["one-size"],
  //   categories: ["sunglasses"],
  //   colors: ["black"],
  //   currency: "ARS",
  // },
]
