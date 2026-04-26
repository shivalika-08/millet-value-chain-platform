import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductListing() {
  const [products, setProducts] = useState({
    Millets: "",
    Price: ""
  });

  const [productList, setProductList] = useState([]);

  // 🔹 Handle input
  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const prod = {
        Millets: products.Millets.trim(),
        Price: Number(products.Price)
      };

      const res = await axios.post(
        "http://localhost:5000/addproduct",
        prod
      );

      alert("Product added successfully");

      setProducts({ Millets: "", Price: "" });

      // refresh list
      fetchProducts();

    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  // 🔹 Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProductList(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 🔹 Load on start
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-2 p-2 font-roboto font-semibold">

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="Millets"
          placeholder="Enter Millet Name"
          value={products.Millets}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <input
          type="number"
          name="Price"
          placeholder="Enter Price"
          value={products.Price}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <button className="bg-green-500 text-white px-4 py-2">
          Add Product
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {productList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-2 border-black rounded-xl bg-green-200 p-3"
          >
            {/* Image */}
            <div className="h-32 overflow-hidden">
              <img
                src="./picture1.jpg"
                alt="product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Top */}
            <div className="flex justify-between items-start mt-2">
              <h6 className="text-sm sm:text-base">
                {item.Millets}
                <p className="text-xs text-gray-600">Local Variety</p>
              </h6>
              <p className="text-sm sm:text-base">₹{item.Price}</p>
            </div>

            {/* Tags */}
            <div className="mt-2 flex gap-2">
              <span className="bg-yellow-400 px-2 py-1 text-xs rounded">
                Organic
              </span>
              <span className="border px-2 py-1 text-xs rounded">
                FSSAI
              </span>
            </div>

            {/* Bottom */}
            <div className="flex justify-between mt-2 text-gray-500 text-xs">
              <p>Stock: 500 quintals</p>
              <p>India</p>
            </div>

            {/* Farmer */}
            <p className="text-xs text-gray-600 mt-1">
              Farmer: Unknown
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;