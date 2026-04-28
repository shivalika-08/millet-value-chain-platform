import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

function Cart() {
  const navigate = useNavigate();

  const { cartItems, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

  const [showForm, setShowForm] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="m-5 p-5">
        {/* Back Button */}
        <div>
          <button
            className="font-roboto text-xl text-gray-700 hover:text-green-900"
            onClick={() => navigate("/Userhome?tab=marketplace")}
          >
            <i className="fa-solid fa-arrow-left"></i>Continue Shopping
          </button>
        </div>

        {/* when cartis empty */}
        {cartItems.length === 0 ? (
          /* BEFORE */
          <div className="m-3 p-2 text-center">
            <div className="text-9xl text-gray-400">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="mt-3">
              <p className="font-bold font-serif text-3xl">Cart is empty</p>
              <p className="font-roboto text-green-900 leading-2">
                Browse our marketplace to find quality millets
              </p>
              <button
                className="bg-green-900 text-white p-2 rounded"
                onClick={() => navigate("/Userhome?tab=marketplace")}
              >
                Browse Millets
              </button>
            </div>
          </div>
        ) : (
          // {when cart is full}
          /* AFTER */
          <div className="p-6 min-h-screen">
            <h2 className="text-2xl font-serif mb-6">
              Shopping Cart ({cartItems.length})
            </h2>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* LEFT SIDE */}
              <div className="flex-1">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-olive-100 rounded-xl p-4 shadow flex justify-between items-center border-2 border-olive-100 mb-4"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-900 to-yellow-500 rounded-lg"></div>

                      <div>
                        <p className="font-semibold leading-2 font-serif">
                          {item.name}
                        </p>
                        <p className="text-gray-500 leading-2 font-roboto">
                          Seller Name
                        </p>
                        <p className="text-green-800 leading-2 font-roboto">
                          ₹{item.price}/quintal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center border rounded-full px-3 py-1 gap-3">
                        <button onClick={() => decreaseQty(item.id)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          style={{ width: "30px", textAlign: "center" }}
                        />

                        <button onClick={() => increaseQty(item.id)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>

                      <p className="font-semibold">
                        ₹{item.price * item.quantity}
                      </p>

                      <button
                        className="text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full lg:w-1/3 bg-olive-100 rounded-xl p-5 shadow border-2 border-olive-100">
                <h3 className="text-lg font-semibold mb-3 font-serif">
                  Order Summary
                </h3>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between pb-2 text-sm"
                  >
                    <p className="text-gray-500 font-roboto">
                      {item.name}
                      <i class="fa-solid fa-x"></i>
                      {item.quantity}
                    </p>
                    <p className="font-bold">₹{item.price * item.quantity}</p>
                  </div>
                ))}

                <div className="flex justify-between font-semibold text-lg my-2 border-t mb-1">
                  <p className="font-roboto">Total</p>
                  <p className="text-green-900">₹{totalPrice}</p>
                </div>

                {showForm && (
                  <div className="space-y-3 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border rounded-lg p-2 ring-2 ring-olive-200 hover:ring-green-900 mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full border rounded-lg p-2 ring-2 ring-olive-200 hover:ring-green-900 mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Delivery Address"
                      className="w-full border rounded-lg p-2 ring-2 ring-olive-200 hover:ring-green-900 mb-2"
                    />
                  </div>
                )}

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-green-800 text-white py-3 rounded-lg mt-2 rounded"
                >
                  {showForm
                    ? `Place Order — ₹${totalPrice}`
                    : "Proceed to Checkout"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
