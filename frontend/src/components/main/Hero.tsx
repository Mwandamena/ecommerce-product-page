import Carousel from "./Carousel";
import ProductDescription from "./ProductDescription";

export default function Hero() {
  return (
    <main className="mt-[96px] w-full h-full">
      <div className="w-full md:my-10 flex md:px-20 md:gap-4 flex-col md:flex-row items-center">
        <Carousel />
        <ProductDescription />
      </div>
    </main>
  );
}
