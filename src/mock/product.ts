export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string[];
}

export const Product: IProduct = {
  id: 1,
  title: 'Awesome product',
  price: 9.99,
  img: 'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg',
  description: ['This is a great product!'],
}
