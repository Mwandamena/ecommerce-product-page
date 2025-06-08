import { GrClose } from "react-icons/gr";
import { carouselImages } from "./images";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Props {
  open: boolean;
  thumbnails: carouselImages[];
  carouselImages: carouselImages[];
  setOpen: (value: boolean) => void;
}

const ScreenCarousel = ({
  open,
  thumbnails,
  carouselImages,
  setOpen,
}: Props) => {
  const carouselArray = [...carouselImages];
  const [current, setCurrent] = useState(0);

  // controls function
  const nextSlide = () => {
    setCurrent(current === carouselArray.length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselArray.length - 1 : current - 1);
    console.log(current);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      setCurrent(current === carouselArray.length - 1 ? 0 : current + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.addEventListener("keydown", handleKeyDown);
    };
  }, []);

  // motion controls
  const controls1 = {
    initail: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const controls2 = {
    initail: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.1,
      },
    },
  };

  return (
    <>
      {open && (
        <motion.main className="fixed h-screen inset-0 w-screen z-[9999] flex items-center justify-center">
          {/* overlay */}
          <motion.div
            initial={controls1.initail}
            animate={controls1.animate}
            className="fixed w-screen h-screen inset-0 bg-black/65 backdrop-blur-lg"
          />

          {/* modal main image */}
          <motion.div
            initial={controls2.initail}
            animate={controls2.animate}
            className="max-w-sm z-[9999] px-4"
          >
            <div className="text-white font-bold w-full mb-2 flex justify-end">
              <button
                className="hover:text-orange-500"
                onClick={() => setOpen(false)}
              >
                <GrClose />
              </button>
            </div>

            {/* carousel main image */}
            <div className="relative">
              <div
                className="absolute p-2 -left-4 bg-white/90 flex items-center text-center rounded-full translate-y-1/2 bottom-1/2 hover:bg-orange-500 hover:text-white cursor-pointer"
                onClick={() => prevSlide()}
              >
                <button>
                  <BsArrowLeft />
                </button>
              </div>
              <img
                src={carouselArray[current].src}
                alt={"some text"}
                className="rounded-lg"
              />
              <div
                className="absolute p-2 -right-4 bg-white/90 flex items-center text-center rounded-full translate-y-1/2 bottom-1/2 hover:bg-orange-500 hover:text-white cursor-pointer"
                onClick={() => nextSlide()}
              >
                <button>
                  <BsArrowRight />
                </button>
              </div>
            </div>

            {/* thumbnails */}
            <div className="mt-4 flex items-center justify-between gap-2">
              {thumbnails.map((thumb, index) => (
                <div
                  className={`max-w-[70px] ${
                    current === index ? "ring-2 ring-orange-500 rounded-lg" : ""
                  }`}
                  key={index}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.title}
                    onClick={() => setCurrent(index)}
                    className={`rounded-lg ring-2 ring-transparent ring-offset-1 cursor-pointer hover:opacity-50 transition-all duration-300 ${
                      current === index ? "opacity-50" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.main>
      )}
    </>
  );
};

export default ScreenCarousel;
