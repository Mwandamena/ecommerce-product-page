import { useEffect, useState } from "react";
import { carouselImages, thumbnails } from "./images";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ScreenCarousel from "./ScreenCarousel.tsx";

export default function Carousel() {
  const carouselArray = [...carouselImages];
  const [current, setCurrent] = useState(0);
  const [, setDirection] = useState(0);
  const [open, setOpen] = useState(false);

  // controls function
  const nextSlide = () => {
    setDirection(1);
    setCurrent(current === carouselArray.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent(current === 0 ? carouselArray.length - 1 : current - 1);
  };

  // prevent scrolling
  useEffect(() => {
    const document = window.document.body;
    if (open) {
      document.classList.add("overflow-y-hidden");
    } else {
      document.classList.remove("overflow-y-hidden");
    }
  }, [open, setOpen]);

  return (
    <section className="md:px-12 flex-1 space-y-6 w-full md:max-w-lg">
      <div className="relative">
        {/* carousel main image */}
        <div className="md:hidden absolute p-2 left-4 bg-white/90 flex items-center text-center rounded-full translate-y-1/2 bottom-1/2">
          <button onClick={() => prevSlide()}>
            <BsArrowLeft />
          </button>
        </div>
        <img
          src={carouselArray[current].src}
          alt={carouselArray[current].title}
          className="md:rounded-lg cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <div className="md:hidden absolute p-2 right-4 bg-white/90 flex items-center text-center rounded-full translate-y-1/2 bottom-1/2">
          <button onClick={() => nextSlide()}>
            <BsArrowRight />
          </button>
        </div>
      </div>

      {/* thumbnails */}
      <div className="hidden md:flex items-center justify-between gap-2">
        {thumbnails.map((thumb, index) => (
          <img
            src={thumb.src}
            alt={thumb.title}
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-lg max-w-[70px] ring-2 ring-transparent ring-offset-1 cursor-pointer hover:opacity-50 transition-all duration-300 ${
              current === index
                ? "ring-orange-500 opacity-50"
                : "ring-transparent"
            }`}
          />
        ))}
      </div>

      {/* carousel screen modal */}
      <ScreenCarousel
        open={open}
        setOpen={setOpen}
        thumbnails={thumbnails}
        carouselImages={carouselImages}
      />
    </section>
  );
}
