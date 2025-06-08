export interface carouselImages {
  id: number;
  title?: string;
  src: string;
}

export const thumbnails: carouselImages[] = [
  {
    id: 0,
    title: "Image 1",
    src: "/src/assets/images/image-product-1-thumbnail.jpg",
  },
  {
    id: 1,
    title: "Image 2",
    src: "/src/assets/images/image-product-2-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Image 3",
    src: "/src/assets/images/image-product-3-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Image 4",
    src: "/src/assets/images/image-product-4-thumbnail.jpg",
  },
];

export const carouselImages: carouselImages[] = [
  {
    id: 0,
    title: "Image 1",
    src: "/src/assets/images/image-product-1.jpg",
  },
  {
    id: 1,
    title: "Image 2",
    src: "/src/assets/images/image-product-2.jpg",
  },
  {
    id: 2,
    title: "Image 3",
    src: "/src/assets/images/image-product-3.jpg",
  },
  {
    id: 3,
    title: "Image 4",
    src: "/src/assets/images/image-product-4.jpg",
  },
];
