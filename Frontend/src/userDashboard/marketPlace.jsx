import React from "react";
import {useNavigate}from 'react-router-dom'

const products = [
  {
    name: "Pearl Millet (Bajra)",
    price: "₹2,800",
    desc: "Premium quality pearl millet grown organically in the Thar Desert region.",
    farmer: "Rajesh Kumar - Jodhpur, Rajasthan",
  },
  {
    name: "Finger Millet (Ragi)",
    price: "₹3,200",
    desc: "Nutrient-dense finger millet, high in calcium. Perfect for ragi flour.",
    farmer: "Anita Devi - Tumkur, Karnataka",
  },
  {
    name: "Foxtail Millet (Kangni)",
    price: "₹4,500",
    desc: "Light and easy to digest foxtail millet. Ideal for khichdi.",
    farmer: "Suresh Patel - Anantapur, AP",
  },
  {
    name: "Sorghum (Jowar)",
    price: "₹2,500",
    desc: "Versatile sorghum grain for rotis and porridge.",
    farmer: "Rajesh Kumar - Rajasthan",
  },
  {
    name: "Little Millet (Kutki)",
    price: "₹5,000",
    desc: "Small but mighty millet, great rice replacement.",
    farmer: "Meena Kumari - Odisha",
  },
  {
    name: "Barnyard Millet (Sanwa)",
    price: "₹4,800",
    desc: "High fiber millet, great for fasting recipes.",
    farmer: "Vikram Singh - Uttarakhand",
  },
];

const Marketplace = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-700">GoldGrain Hub</h1>
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

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gradient-to-r from-green-700 to-yellow-500 rounded-t-xl flex items-center justify-center text-white text-xl font-bold">
              GF
            </div>

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

              {/* Tags */}
              <div className="flex gap-2 mt-2 text-xs">
                <span className="bg-yellow-100 px-2 py-1 rounded">Organic</span>
                <span className="bg-gray-100 px-2 py-1 rounded">FSSAI</span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {product.farmer}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg">
                  Add to Cart
                </button>
                <button className="border px-3 rounded-lg">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;