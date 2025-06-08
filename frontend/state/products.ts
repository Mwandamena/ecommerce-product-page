import { carouselImages, thumbnails } from "../src/components/main/images";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string;
  images: carouselImages[];
}

export const products: ProductProps[] = [
  {
    id: 0,
    name: "Fall Limited Edition Sneakers",
    price: 250,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.",
    discount: 50,
    images: [...thumbnails],
  },
];
