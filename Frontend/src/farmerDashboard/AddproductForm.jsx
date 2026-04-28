import axios from "axios";
import { useState } from "react";

export default function AddProductModal({ closeModal }) {
  const [addproduct, setaddproduct] = useState({
    ProductName: "",
    MilletType: "",
    Variety: "",
    Price: "",
    Stock: "",
    Description: "",
  });

  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    setaddproduct({
      ...addproduct,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

  
    if (loading) return;

  
    if (
      !addproduct.ProductName ||
      !addproduct.MilletType ||
      !addproduct.Price
    ) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/products",
        addproduct
      );

      alert(res.data.message);

    
      setaddproduct({
        ProductName: "",
        MilletType: "",
        Variety: "",
        Price: "",
        Stock: "",
        Description: "",
      });

      closeModal();
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative bg-olive-100 w-[400px] p-6 rounded-xl shadow-lg z-10">
        <button onClick={closeModal} className="absolute top-2 right-3 text-xl">
<<<<<<< Updated upstream
          <i className="fa-solid fa-x"></i>
        </button>

        <h2 className="font-semibold mb-4 font-serif">Add New Product</h2>

        <form onSubmit={handlesubmit} className="space-y-3">
          
          {/* Product Name */}
=======
          {" "}
          <i className="fa-solid fa-x"></i>{" "}
        </button>{" "}
        <h2 className="font-semibold mb-4 font-serif">Add New Product</h2>{" "}
        <form className="space-y-3">
          {" "}
>>>>>>> Stashed changes
          <div>
            <label className="mb-1 font-roboto">Product Name</label>
            <input
              name="ProductName"
              value={addproduct.ProductName}
              onChange={handlechange}
              className="w-full p-2 border rounded hover:ring ring-green-900 ring-offset-2"
              placeholder="e.g. Pearl Millet(Bajra)"
            />
          </div>

          {/* Millet Type */}
          <div>
            <label className="font-roboto mb-1">Millet Type</label>
            <select
              name="MilletType"
              value={addproduct.MilletType}
              onChange={handlechange}
              className="w-full border p-2 rounded hover:ring ring-green-900 ring-offset-2"
            >
              <option value="">Select</option>
              <option>Pearl Millet</option>
              <option>Finger Millet</option>
              <option>Foxtail Millet</option>
              <option>Sorghum</option>
              <option>Little Millet</option>
              <option>Barnyard Millet</option>
            </select>
          </div>

          {/* Variety */}
          <div>
            <label className="font-roboto mb-1">Variety</label>
            <input
              name="Variety"
              value={addproduct.Variety}
              onChange={handlechange}
              className="w-full border p-2 rounded hover:ring ring-green-900 ring-offset-2"
              placeholder="Variety"
              type="text"
            />
          </div>

          {/* Price & Stock */}
          <div className="flex gap-2">
            <div>
              <label className="font-roboto mb-1">
                Price (<i className="fa-solid fa-indian-rupee-sign"></i>/quintal)
              </label>
              <input
                name="Price"
                value={addproduct.Price}
                onChange={handlechange}
                className="w-max border p-2 rounded hover:ring ring-green-900 ring-offset-2"
                placeholder="2500"
                type="number"
              />
            </div>

            <div>
              <label className="font-roboto mb-1">
                Stock (quintals)
              </label>
              <input
                name="Stock"
                value={addproduct.Stock}
                onChange={handlechange}
                className="w-4/5 border p-2 rounded hover:ring ring-green-900 ring-offset-2"
                placeholder="200"
                type="text"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-roboto mb-1">Description</label>
            <textarea
              name="Description"
              value={addproduct.Description}
              onChange={handlechange}
              className="w-full border p-2 rounded hover:ring ring-green-900 ring-offset-2"
              placeholder="Description"
            ></textarea>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            className="w-full bg-green-900 text-white py-2 rounded"
          >
            {loading ? "Adding..." : "List Product"}
          </button>
        </form>
      </div>
    </div>
  );
}