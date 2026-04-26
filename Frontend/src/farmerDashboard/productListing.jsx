import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductListing() {

  const [products, setProducts] = useState([]);

  // 🔹 Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-2 p-2 font-roboto font-semibold cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

        {products.map((item, index) => (
          <div key={index} className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
            
            {/* Top */}
            <div className="flex justify-between items-start">
              <h6 className="text-sm sm:text-base">
                {item.ProductName}
                <p className="text-xs text-gray-600">{item.Variety}</p>
              </h6>
              <p className="text-sm sm:text-base">₹{item.Price}</p>
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
              <p>Stock: {item.Stock} quintals</p>
              <p>{item.Location}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductListing;