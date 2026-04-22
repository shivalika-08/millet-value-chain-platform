import React from "react";

function Header({ setActiveTab }) {
  return (
    <section className="mt-17">
      <div className="sticky">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-2 p-2 gap-3">
          <div className="ml-2">
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl">
              Namaste,User! <i className="fa-solid fa-ghost"></i>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Dear user, Manage your millet listings
            </p>
          </div>

          <div className="w-full md:w-auto">
            <button className="btn btn-success btn-md w-full md:w-auto">
              <i className="fa-solid fa-plus mr-1"></i>
              Add Product
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mx-2 p-2 font-roboto font-semibold">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
              <i className="fa-solid fa-indian-rupee-sign text-green-900 text-xl"></i>
              <h4>₹57,600</h4>
              <p className="text-gray-500 text-sm">Revenue</p>
            </div>

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
              <i className="fa-solid fa-boxes-stacked text-green-900 text-xl"></i>
              <h4>2</h4>
              <p className="text-gray-500 text-sm">Products</p>
            </div>

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
              <i className="fa-solid fa-bag-shopping text-green-900 text-xl"></i>
              <h4>3</h4>
              <p className="text-gray-500 text-sm">Orders</p>
            </div>

            <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
              <i className="fa-solid fa-box text-green-900 text-xl"></i>
              <h4>1300 qtl</h4>
              <p className="text-gray-500 text-sm">Total Stock</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 p-2">
            <div className="border-b-2 border-gray-300">
              <div className="flex flex-wrap gap-3 text-sm sm:text-base">
                <div className="text-gray-400 hover:text-black flex items-center gap-1 cursor-pointer">
                  <i className="fa-solid fa-box"></i>
                  <button onClick={() => setActiveTab("products")}>
                    Products
                  </button>
                </div>

                <div className="text-gray-400 hover:text-black flex items-center gap-1 cursor-pointer">
                  <i className="fa-solid fa-bus-side"></i>
                  <button onClick={() => setActiveTab("orders")}>Orders</button>
                </div>

                <div className="text-gray-400 hover:text-black flex items-center gap-1 cursor-pointer">
                  <i className="fa-regular fa-chart-bar"></i>
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
