import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";


function Header({ setActiveTab }) {
const user = useSelector((state)=>state.user)
const dispatch = useDispatch()
useEffect(() => {
  if (!user) {
    const name = localStorage.getItem("FullName");
    if (name) {
      dispatch(addUser({ FullName: name }));
    }
  }
}, []);
  
  return (
    <section className="mt-17 cursor-pointer">
      <div className="sticky">
        
        {/* Nav */}
        <div className="flex flex-row justify-between items-center m-2 p-1">
          <div className="ml-3 mt-3 p-2">
            <h2 className="font-serif">
              Namaste, {user?.FullName||"FullName"}! <i className="fa-solid fa-ghost"></i>
            </h2>
            <p className="text-gray-500">
              Dear {user?.FullName}, Manage your millet listings
            </p>
          </div>

          <div>
            <button className="btn btn-success btn-md me-3">
              <i className="fa-solid fa-plus"></i> Add Product
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="ml-2 mr-2 p-2 font-roboto font-semibold">
          <div className="flex flex-row justify-evenly">

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-2 w-1/5">
              <i className="fa-solid fa-indian-rupee-sign text-green-900 text-xl"></i>
              <h4>₹57,600</h4>
              <p className="text-gray-500">Revenue</p>
            </div>

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-2 w-1/5">
              <i className="fa-solid fa-boxes-stacked text-green-900 text-xl"></i>
              <h4>2</h4>
              <p className="text-gray-500">Products</p>
            </div>

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-2 w-1/5">
              <i className="fa-solid fa-bag-shopping text-green-900 text-xl"></i>
              <h4>3</h4>
              <p className="text-gray-500">Orders</p>
            </div>

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-2 w-1/5">
              <i className="fa-solid fa-box text-green-900 text-xl"></i>
              <h4>1300 qtl</h4>
              <p className="text-gray-500">Total Stock</p>
            </div>

          </div>

          {/* Tabs */}
          <div className="mt-3 p-3">
            <div className="border-b-2 border-gray-300">
              <div className="flex flex-row">

                <div className="text-gray-400 hover:text-black text-xl mr-3 p-2">
                  <i className="fa-solid fa-box mr-1"></i>
                  <button onClick={() => setActiveTab("products")}>
                    Products
                  </button>
                </div>

                <div className="text-gray-400 hover:text-black text-xl mr-3 p-2">
                  <i className="fa-solid fa-bus-side mr-1"></i>
                  <button onClick={() => setActiveTab("orders")}>
                    Orders
                  </button>
                </div>

                <div className="text-gray-400 hover:text-black text-xl p-2">
                  <i className="fa-regular fa-chart-bar mr-1"></i>
                  <button onClick={() => setActiveTab("analytics")}>
                    Analytics
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Header;