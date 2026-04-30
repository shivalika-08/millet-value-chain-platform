import React from "react";
import { useNavigate } from "react-router-dom";
import { useState} from "react";

import Usernav from "./Usernav";
import Footer from "../footer";

import { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductDetails() {

  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const pricePerUnit = 2800;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const totalPrice = pricePerUnit * quantity;

  const role = localStorage.getItem("role");

  if (role !== "buyer") {
    return <h1>Access Denied</h1>;
  }

  return (
    <>
      <Usernav />

      <div className="m-5 p-5">
        {/* button */}
        <div>
          <button
            className="font-roboto text-xl text-gray-700 hover:text-green-900"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i>Back to Marketplace
          </button>
        </div>

        {/* main content */}
        <div className="mt-2 p-2 h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* img div */}
            <div className="m-2 p-2 bg-gradient-to-r from-green-900 to-yellow-500 rounded-xl flex items-center justify-center">
              <img src={null} alt="" className="w-full h-full object-cover" />
            </div>

            {/* content */}
            <div className="m-2 p-2">
              <div className="flex gap-1 flex-wrap text-xs">
                <span>
                  <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-bold m-1 p-1">
                    <i className="fa-solid fa-leaf"></i>Organic
                  </div>
                </span>
                <span>
                  <div className="bg-gray-100 px-1 py-1 rounded-full m-1 p-1 text-bold border-2 border-gray-100">
                    <i className="fa-solid fa-apple-whole"></i>FSSAI Certified
                  </div>
                </span>
              </div>

              <div className="text-left h-full">
                <p className="text-4xl font-bold font-serif break-words">
                  Product Name
                </p>

                <p className="font-roboto text-gray-500 leading-3">Variety:</p>

                <p className="mt-4">
                  <span className="text-2xl text-green-900 font-roboto font-bold">
                    <i className="fa-solid fa-indian-rupee-sign"></i>2,800
                  </span>
                  <span className="font-roboto text-green-900">
                    {" "}
                    per quintal
                  </span>
                </p>

                <p className="font-roboto text-green-900 text-md mt-2 mb-2 break-words">
                  write a short description of the product.
                </p>

                <p className="text-xs text-green-900 break-words mt-2 mb-2">
                  <i className="fa-solid fa-user"></i>Seller Name{" "}
                  <i className="fa-solid fa-location-dot"></i> City, State
                </p>

                <div className="border-2 border-black w-full p-2 mt-3 bg-olive-100 rounded">
                  <div className="flex justify-between flex-wrap text-md text-bold font-roboto">
                    <p>Stock Avaliable</p>
                    <p className="text-green-900">500 quintals</p>
                  </div>

                  <div className="flex flex-col sm:flex-row w-full gap-3 mt-2">
                    {/* quantity */}
                    <div className="flex items-center">
                      <button
                        className="border-2 border-olive-200 p-2 rounded"
                        onClick={handleDecrease}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>

                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "");
                          setQuantity(val === "" ? 1 : Number(val));
                        }}
                        min={"1"}
                        style={{ width: "40px", textAlign: "center" }}
                        className="border-2 border-olive-200 p-2 rounded"
                      />

                      <button
                        className="border-2 border-olive-200 p-2 rounded"
                        onClick={handleIncrease}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>

                    {/* button */}
                    <div className="flex-1">
                      <button
                        className="w-full bg-green-900 text-white p-2 rounded"
                        onClick={() =>
                          addToCart({
                            name: "Product Name",
                            price: pricePerUnit,
                            quantity: quantity,
                            total: totalPrice,
                          })
                        }
                      >
                        <i className="fa-solid fa-cart-shopping"></i>Add to
                        cart- <i className="fa-solid fa-indian-rupee-sign"></i>
                        {totalPrice}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
