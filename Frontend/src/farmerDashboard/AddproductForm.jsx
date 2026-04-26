import axios from "axios";
import { useState } from "react";

export default function AddproductForm({ closeModal }) {

  const [product, setProduct] = useState({
    ProductName: "",
    MilletType: "",
    Variety: "",
    Price: "",
    Stock: "",
    Description: "",
    Name: "",
    Location: "",
  });


  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addDetail = {
        ProductName: product.ProductName.trim(),
        MilletType: product.MilletType.trim(),
        Variety: product.Variety.trim(),
        Price: Number(product.Price),
        Stock: product.Stock,
        Description: product.Description,
        Name: product.Name,
        Location: product.Location,
      };

      const res = await axios.post(
        "http://localhost:5000/addproduct",
        addDetail
      );

      alert("Product Added ");
      console.log(res.data);

      closeModal();

    } catch (error) {
      console.error(error);
      alert("Error adding product ");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative bg-green-100 w-[400px] p-6 rounded-xl shadow-lg z-10">
        <button onClick={closeModal} className="absolute top-2 right-3 text-xl">
          ✖
        </button>

        <h2 className="font-semibold mb-4">Add New Product</h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          
          <input
            name="ProductName"
            value={product.ProductName}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-2 border rounded"
          />

          <select
            name="MilletType"
            value={product.MilletType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Millet</option>
            <option>Pearl Millet</option>
            <option>Finger Millet</option>
            <option>Foxtail Millet</option>
            <option>Sorghum</option>
          </select>

          <input
            name="Variety"
            value={product.Variety}
            onChange={handleChange}
            placeholder="Variety"
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-2">
            <input
              name="Price"
              value={product.Price}
              onChange={handleChange}
              type="number"
              placeholder="Price"
              className="w-full border p-2 rounded"
            />

            <input
              name="Stock"
              value={product.Stock}
              onChange={handleChange}
              placeholder="Stock"
              className="w-full border p-2 rounded"
            />
          </div>

          <textarea
            name="Description"
            value={product.Description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
          />

          <input
            name="Name"
            value={product.Name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />

          <input
            name="Location"
            value={product.Location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-green-900 text-white py-2 rounded">
            List Product
          </button>

        </form>
      </div>
    </div>
  );
}