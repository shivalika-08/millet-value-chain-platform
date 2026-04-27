
import axios from "axios";
import { useState } from "react";


export default function AddProductModal({ closeModal }) {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {" "}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>{" "}
      <div className="relative bg-olive-100 w-[400px] p-6 rounded-xl shadow-lg z-10">
        {" "}
        <button onClick={closeModal} className="absolute top-2 right-3 text-xl">
          {" "}
          <i class="fa-solid fa-x"></i>{" "}
        </button>{" "}
        <h2 className="font-semibold mb-4 font-serif">Add New Product</h2>{" "}
        <form className="space-y-3">
          {" "}
          <div>
            {" "}
            <label htmlFor="ProductName" className="mb-1 font-roboto">
              {" "}
              Product Name{" "}
            </label>{" "}
            <input
              className="w-full p-2 border rounded hover:ring ring-green-900 ring-offset-2"
              placeholder="e.g. Pearl Millet(Bajra)"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label htmlFor="" className="font-roboto mb-1">
              {" "}
              Millet Type{" "}
            </label>{" "}
            <select className="w-full border p-2 rounded hover:ring ring-green-900 ring-offset-2">
              {" "}
              <option>Pearl Millet</option> <option>Finger Millet</option>{" "}
              <option>Foxtail Millet</option> <option>Sorghum</option>{" "}
              <option>Little Millet</option>{" "}
              <option>Barnyard Millet</option>{" "}
            </select>{" "}
          </div>{" "}
          <div>
            {" "}
            <label htmlFor="" className="font-roboto mb-1">
              {" "}
              Variety{" "}
            </label>{" "}
            <input
              className="w-full border p-2 rounded hover:ring ring-green-900 ring-offset-2"
              placeholder="Variety"
              type="text"
            />{" "}
          </div>{" "}
          <div className="flex gap-2">
            {" "}
            <div>
              {" "}
              <label htmlFor="" className="font-roboto mb-1">
                {" "}
                Price (<i class="fa-solid fa-indian-rupee-sign"></i>
                /quintal){" "}
              </label>{" "}
              <input
                className="w-max border p-2 rounded hover:ring ring-green-900 ring-offset-2"
                placeholder="2500"
                type="number"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label htmlFor="" className="font-roboto mb-1">
                {" "}
                Stock (quintals){" "}
              </label>{" "}
              <input
                className="w-4/5 border p-2 rounded hover:ring ring-green-900 ring-offset-2"
                placeholder="200"
                type="text"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <label htmlFor="" className="font-roboto mb-1">
              {" "}
              Description{" "}
            </label>{" "}
            <textarea
              className="w-full border p-2 rounded hover:ring ring-green-900 ring-offset-2"
              placeholder="Description"
            ></textarea>{" "}
          </div>{" "}
          <button className="w-full bg-green-900 text-white py-2 rounded">
            {" "}
            List Product{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
