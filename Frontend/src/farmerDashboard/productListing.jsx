import React, { useState } from "react";
import axios from "axios";

function ProductListing() {

  const [products, setProducts] = useState({
    Millets: "",
    Price: ""
  });

  
  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const prod = {
        Millets: products.Millets.trim(),
        Price: products.Price.trim()
      };

      const res = await axios.post(
        "http://localhost:5000/addproduct",
        prod
      );

      console.log(res.data);
      alert("Product added successfully");

      // reset form
      setProducts({ Millets: "", Price: "" });

    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  return (
    <div className="mx-2 p-2 font-roboto font-semibold">
   
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
          type="text"
          name="Price"
          placeholder="Enter Price"
          value={products.Price}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Add Product
        </button>
      </form>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
<<<<<<< Updated upstream
        <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
          {/* Top Gradient */}
          <div className="h-32 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full">
              <img
                src="./picture1.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Top */}
          <div className="flex justify-between items-start m-2">
=======
        <div className="flex flex-col border-2 border-black rounded-xl bg-green-200 p-3">
          
          <div className="flex justify-between items-start">
>>>>>>> Stashed changes
            <h6 className="text-sm sm:text-base">
              Pearl Millet (Bajra)
              <p className="text-xs text-gray-600">HHB67</p>
            </h6>
            <p className="text-sm sm:text-base">₹2,800</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <button className="btn btn-warning btn-sm rounded-pill">
              Organic
            </button>
            <button className="btn btn-outline-light btn-sm rounded-pill text-black">
              FSSAI
            </button>
          </div>

          <div className="flex justify-between items-center mt-2 text-gray-500 text-xs sm:text-sm">
            <p>Stock: 500 quintals</p>
            <p>Location</p>
          </div>

<<<<<<< Updated upstream
          {/* Details of Farmer */}
          <span className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
            <p>Name</p>
          </span>
=======
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default ProductListing;