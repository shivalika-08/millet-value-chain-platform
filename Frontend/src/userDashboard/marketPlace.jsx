// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


import ProductCard from "./ProductCard";

const Marketplace = () => {
  // const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("API DATA:", data); // debug ke liye
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 w-full mt-5 cursor-pointer">
        {/* Title */}
        {/* <div className="text-left m-2 p-2">
          <p className="text-2xl sm:text-3xl font-bold font-serif">
            Millet Marketplace
          </p>
          <p className="mb-4 font-roboto text-green-900 text-sm sm:text-base">
            Browse fresh millets directly from farmers across India
          </p>
        </div> */}

        {/* Search + Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          {/* Search */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white w-full ring-1 ring-gray-300 hover:ring-2 hover:ring-green-900 hover:bg-green-900 transition duration-200">
              <i className="fa-solid fa-magnifying-glass mr-3"></i>
              <input
                type="text"
                placeholder="Search millets or farmers..."
                className="outline-none w-full bg-transparent text-black text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1 justify-evenly md:justify-evenly text-xs sm:text-xs font-semibold">
            {[
              "All",
              "Pearl Millet",
              "Finger Millet",
              "Foxtail Millet",
              "Sorghum",
              "Little Millet",
              "Barnyard Millet",
              "Organic",
            ].map((item, index) => (
              <button
                key={index}
                className="px-1 py-1 border text-xs hover:bg-green-900 hover:text-white rounded whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* listings */}
        <div className="p-6">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

            {/* Only structure (later map from backend) */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
      
};



//         {/* 🔄 Loading State */}
        // {loading ? (
        //   <p className="text-center text-gray-500">Loading products...</p>
        // ) : (
        //   <div className="grid md:grid-cols-3 gap-6">
        //     {products.map((product, index) => (
        //       <div
        //         key={index}
        //         className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        //       >
        //         {/* Gradient Image Style */}
        //         <div className="h-40 bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 flex items-center justify-center relative">
        //           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

        //           <div className="z-10 text-center text-white">
        //             <div className="text-3xl">🌾</div>
        //             <p className="text-xs mt-1 opacity-80">
        //               {product.name?.split(" ")[0]}
        //             </p>
        //           </div>
        //         </div>

        //         {/* Content */}
        //         <div className="p-4">
        //           <div className="flex justify-between">
        //             <h3 className="font-semibold">{product.name}</h3>
        //             <span className="text-green-600 font-bold">
        //               {product.price}
        //             </span>
        //           </div>

        //           <p className="text-sm text-gray-600 mt-2">{product.desc}</p>

        //           <div className="flex gap-2 mt-2 text-xs">
        //             <span className="bg-yellow-100 px-2 py-1 rounded">
        //               Organic
        //             </span>
        //             <span className="bg-gray-100 px-2 py-1 rounded">FSSAI</span>
        //           </div>

        //           <p className="text-xs text-gray-500 mt-2">{product.farmer}</p>

        //           <div className="flex gap-2 mt-4">
        //             <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        //               Add to Cart
        //             </button>

        //             <button
        //               onClick={() =>
        //                 navigate("/product-details", { state: product })
        //               }
        //               className="border px-3 rounded-lg hover:bg-gray-100"
        //             >
        //               Details
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // )}

export default Marketplace;