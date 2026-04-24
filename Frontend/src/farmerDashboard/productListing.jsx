import React from "react";

function ProductListing() {
  return (
    <div className="mx-2 p-2 font-roboto font-semibold cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
          {/* Top */}
          <div className="flex justify-between items-start">
            <h6 className="text-sm sm:text-base">
              Pearl Millet (Bajra)
              <p className="text-xs text-gray-600">HHB67</p>
            </h6>
            <p className="text-sm sm:text-base">₹2,800</p>
          </div>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            <button className="btn btn-warning btn-sm rounded-pill">
              Organic
            </button>
            <button className="btn btn-outline-light btn-sm rounded-pill text-black">
              FSSAI
            </button>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center mt-2 text-gray-500 text-xs sm:text-sm">
            <p>Stock: 500 quintals</p>
            <p>Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
