import image1 from "../../assets/images/image-product-1.jpg";
import image2 from "../../assets/images/image-product-2.jpg";
import image3 from "../../assets/images/image-product-3.jpg";
import image4 from "../../assets/images/image-product-4.jpg";

export interface carouselImages {
  id: number;
  title?: string;
  src: string;
}

export const thumbnails: carouselImages[] = [
  {
    id: 0,
    title: "Image 1",
    src: image1,
  },
  {
    id: 1,
    title: "Image 2",
    src: image2,
  },
  {
    id: 2,
    title: "Image 3",
    src: image3,
  },
  {
    id: 3,
    title: "Image 4",
    src: image4,
  },
];

export const carouselImages: carouselImages[] = [
  {
    id: 0,
    title: "Image 1",
    src: image1,
  },
  {
    id: 1,
    title: "Image 2",
    src: image2,
  },
  {
    id: 2,
    title: "Image 3",
    src: image3,
  },
  {
    id: 3,
    title: "Image 4",
    src: image4,
  },
];
