import addIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useState } from "react";
import { addToCart } from "../../../state/slices/productSlice";
import { setQuantity } from "../../../state/slices/productSlice";

export default function ProductDescription() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const [productQuantity, setProductQuantity] = useState(0);
  const product = products[0];

  // increase the quantity
  const increaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (productQuantity == 0) return;
    setProductQuantity((prev) => prev - 1);
  };

  const handleQuantity = () => {
    dispatch(setQuantity(productQuantity));
  };

  // add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    handleQuantity();
  };

  return (
    <section className="flex-1 space-y-6 px-4 sm:px-2 md:px-10 xl:px-20 mt-16 md:mt-0 mb-4">
      {/* product title */}
      <div>
        <div>
          <h3 className="text-orange-500 text-bold uppercase leading-normal">
            Sneaker Company
          </h3>
        </div>
        <div>
          <h1 className="font-bold tracking-tight text-4xl">{product.name}</h1>
        </div>
      </div>

      {/* product description & price */}
      <div>
        <div>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-2xl">
            ${product.price - product.price * (product.discount / 100)}.00
          </h2>
          <span className="bg-paleOrange px-2 py-0.5 rounded-lg text-primaryOrange font-bold">
            {product.discount}%{" "}
          </span>
        </div>
        <div>
          <p className="text-grayishBlue font-bold">${product.price}.00</p>
        </div>
      </div>

      {/* quantity and add to cart */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-auto flex-none flex justify-between gap-0 bg-lightGrayishBlue rounded-lg">
          <button className="p-4" onClick={() => decreaseQuantity()}>
            <img src={minusIcon} alt="" />
          </button>
          <div className="px-6 py-4 font-bold text-center">
            {productQuantity}
          </div>
          <button className="p-4" onClick={() => increaseQuantity()}>
            <img src={addIcon} alt="" />
          </button>
        </div>
        <div className="w-full md:w-auto flex-1">
          <button
            className={`w-full py-4 px-6 bg-primaryOrange text-white font-medium tracking-wide rounded-lg inline-flex gap-2 items-center justify-center hover:opacity-80 disabled:cursor-not-allowed disabled:bg-orange-300 whitespace-nowrap`}
            disabled={productQuantity === 0}
            onClick={() => handleAddToCart()}
          >
            <BsCart />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
}
