import Container from "../shared/Container";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import person from "../../assets/images/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "./links";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  // quantity
  const quantity = useSelector((state: RootState) => state.product.quantity);

  const closeMobileNav = () => {
    setOpen(false);
  };

  // prevent scrolling X
  useEffect(() => {
    const document = window.document.body;
    if (open) {
      document.classList.add("overflow-y-hidden");
    } else {
      document.classList.remove("overflow-y-hidden");
    }
  }, [open, setOpen]);

  const toggleCart = () => {
    setCartModal((prev) => !prev);
  };

  return (
    <nav className="overflow-x-hidden w-full h-24 fixed top-0 right-0 left-0 z-[120] bg-white">
      <Container>
        <div className="w-full flex justify-between items-center gap-6 h-full border-b border-gray-200">
          {/* logo and links */}
          <div className="flex items-center justify-between gap-4 md:gap-8 h-full">
            <button
              className="h-full flex items-center md:hidden"
              onClick={() => setOpen(true)}
            >
              <GiHamburgerMenu />
            </button>

            {/* logo */}
            <div className="h-full flex items-center">
              <a href="/">
                <img src={logo} alt="Ecommerce product page" className="w-24" />
              </a>
            </div>

            {/* links */}
            <div className="md:flex hidden justify-center items-center gap-6 h-full">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={`${link.link}`}
                  className="text-gray-400 relative hover:text-gray-800 inline-flex items-center h-full transition-all duration-300 after:hidden after:w-full after:h-0.5 after:bg-orange-500 hover:after:block after:absolute after:bottom-0 after:rounded-xl"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* user and cart */}
          <div className="flex gap-6 items-center">
            <button
              className="flex-none relative p-2"
              onClick={() => toggleCart()}
            >
              <img src={cart} alt="cart-icon" />
              <span className="absolute px-2 py-0.5 top-0 right-0 bg-orange-500 rounded-full text-white text-center text-xs">
                {quantity}
              </span>
            </button>
            <button className="flex-none">
              <img
                src={person}
                alt="user-avatar"
                className="h-10 w-10 ring-2 ring-transparent hover:ring-orange-500 rounded-full transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </Container>

      {/* cart modal */}
      <Cart open={cartModal} setClose={setCartModal} />

      {/* mobile navbar */}
      <AnimatePresence>
        {open && <MobileNavbar setOpen={closeMobileNav} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
