import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { BsTrash } from "react-icons/bs";
import { removeFromCart } from "../../../state/slices/productSlice";
import React from "react";
import { GrClose } from "react-icons/gr";

type Props = {
  open: boolean;
  setClose: (open: boolean) => void;
};

const Cart: React.FC<Props> = ({ open, setClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.product.cartItems);

  // quantity
  const quantity = useSelector((state: RootState) => state.product.quantity);

  const handleRemoveFromCart = (id: number) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  console.log(cartItems);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: "-5%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.1,
                // damping: 50,
              },
            }}
            exit={{
              opacity: 0,
              y: "-3%",
            }}
            transition={{
              damping: 0.5,
            }}
            className="bg-white fixed md:top-20 md:right-8 w-full h-9/12 md:max-w-xs flex flex-col rounded-lg overflow-x-hidden border shadow-md z-[100]"
          >
            <div className="w-full flex justify-between items-center font-medium px-4 py-4 border-b border-gray-200 bg-white">
              <span>Cart</span>
              <div>
                <button
                  className="p-2 bg-gray-300 rounded-full"
                  onClick={() => setClose(false)}
                >
                  <GrClose className="text-xs" />
                </button>
              </div>
            </div>
            {cartItems.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <p className="text-gray-500 font-bold">Your cart is empty</p>
              </div>
            ) : (
              <div className="w-full px-4 py-2 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3"
                  >
                    <div>
                      <img
                        src={`${item.images[0].src}`}
                        className="w-14 h-14 rounded-lg"
                        alt={item.name}
                      />
                    </div>
                    <div className="text-xs">
                      <p>{item.name}</p>
                      <p>
                        ${item.price * (item.discount / 100)}.00 x {quantity}{" "}
                        <span className="font-bold">
                          ${item.price * (item.discount / 100) * quantity}
                        </span>
                      </p>
                    </div>
                    <div>
                      <button onClick={() => handleRemoveFromCart(item.id)}>
                        <BsTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length !== 0 ? (
              <div className="px-4 py-4">
                <button className="w-full bg-primaryOrange py-3 px-4 text-white inline-flex items-center justify-center text-center rounded-lg">
                  Checkout
                </button>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
