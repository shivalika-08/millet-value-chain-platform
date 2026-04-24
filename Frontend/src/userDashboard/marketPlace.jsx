import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data); // debug ke liye
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-700">
          SHREE ANNA MILLETS
        </h1>
        <div className="space-x-4">
          <button className="text-gray-600">Login</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-2">Millet Marketplace</h2>
      <p className="text-gray-600 mb-4">
        Browse fresh millets directly from farmers across India
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search millets or farmers..."
        className="w-full p-2 border rounded-lg mb-6"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Pearl Millet", "Finger Millet", "Foxtail Millet", "Sorghum"].map(
          (item, index) => (
            <button
              key={index}
              className="px-3 py-1 border rounded-full text-sm hover:bg-green-100"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* 🔄 Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              
              {/* Gradient Image Style */}
              <div className="h-40 bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

                <div className="z-10 text-center text-white">
                  <div className="text-3xl">🌾</div>
                  <p className="text-xs mt-1 opacity-80">
                    {product.name?.split(" ")[0]}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="text-green-600 font-bold">
                    {product.price}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  {product.desc}
                </p>

                <div className="flex gap-2 mt-2 text-xs">
                  <span className="bg-yellow-100 px-2 py-1 rounded">
                    Organic
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    FSSAI
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  {product.farmer}
                </p>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    Add to Cart
                  </button>

                  <button
                    onClick={() =>
                      navigate("/product-details", { state: product })
                    }
                    className="border px-3 rounded-lg hover:bg-gray-100"
                  >
                    Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;