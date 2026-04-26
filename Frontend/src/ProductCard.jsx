import React from "react";

function ProductCard() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md border overflow-hidden hover:shadow-lg transition duration-300">
      {/* Top Gradient */}
      <div className="h-32 bg-gradient-to-r from-green-900 to-yellow-500 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full">
          <img
            src="./picture1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-1">
        {/* Title + Price */}
        <div className="flex justify-between items-center flex-wrap gap-1">
          <h2 className="font-semibold text-lg font-serif">Product Name</h2>
          <span className="text-green-900 font-bold">₹0,000</span>
        </div>

        <p className="text-sm text-gray-500">per quintal</p>

        {/* Description */}
        <p className="text-sm text-green-900 font-roboto break-words">
          Short product description will appear here dynamically.
        </p>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap text-xs">
          <span>
            <div className="bg-yellow-500 text-blackpx-2 py-1 rounded-full text-bold m-1 p-1">
              <i class="fa-solid fa-leaf"></i>Organic
            </div>
          </span>
          <span>
            <div className="bg-gray-100 px-1 py-1 rounded-full m-1 p-1 text-bold border-2 border-gray-100">
              <i class="fa-solid fa-apple-whole"></i>FSSAI
            </div>
          </span>
          <span>
            <div className="bg-gray-100 px-2 py-1 rounded-full m-1 p-1 text-bold border-2 border-gray-100">
              ID123
            </div>
          </span>
        </div>

        {/* Seller */}
        <p className="text-xs text-gray-400 break-words">
          <i class="fa-solid fa-user"></i>Seller Name{" "}
          <i class="fa-solid fa-location-dot"></i> City, State
        </p>

        {/* Buttons */}
        <div className="flex gap-2 pt-2 flex-col sm:flex-row">
          <button className="flex-1 bg-green-900 text-white py-2 rounded-lg! hover:bg-green-800">
            <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
          </button>
          <button className="px-3 border rounded-lg! text-sm hover:bg-yellow-500">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
