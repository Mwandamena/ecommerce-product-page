import close from "../../assets/images/icon-close.svg";
import { links } from "./links";
import { motion } from "framer-motion";

interface MobileNavProps {
  setOpen: () => void;
}

export default function MobileNavbar({ setOpen }: MobileNavProps) {
  return (
    <motion.nav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.3,
        },
      }}
      className="md:hidden w-screen h-screen z-[999] fixed bg-black/50 inset-0 backdrop-blur-sm"
      onClick={() => setOpen()}
    >
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "0%",
          transition: {
            duration: 0.2,
          },
        }}
        transition={{
          type: "ease-in",
          delay: 0.2,
        }}
        exit={{
          x: "-100%",
          transition: {
            delay: 0.2,
            duration: 0.2,
          },
        }}
        className="bg-white w-8/12 h-screen space-y-8 p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <button onClick={() => setOpen()}>
            <img src={close} alt="icon-close" />
          </button>
        </div>

        <div className="flex flex-col gap-4 font-bold">
          {links.map((link, index) => (
            <a href={`${link.link}`} key={index}>
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
