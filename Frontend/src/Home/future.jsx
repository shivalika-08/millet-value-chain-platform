import React from "react";

function Future() {
  return (
    <div className="w-full p-0 bg-olive-100 mt-20 cursor-pointer">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-5 mt-5">
          <h2 className="m-4 font-serif text-xl md:text-2xl">
            The Superfood of the Future
          </h2>

          <p className="text-green-900 font-roboto text-sm md:text-base">
            Millets are drought-tolerant, nutrient-rich ancient grains that use
            70% less water than rice.
            <br />
            Rich in iron, calcium, and protein they're the answer to
            malnutrition and climate change
          </p>

          <ul className="font-roboto mt-3">
            <li className="mb-2 text-green-900 text-sm md:text-base">
              <i className="fa-solid fa-leaf"></i> Eco-friendly: Minimal water,
              fertilizer, and pesticides needed
            </li>

            <li className="mb-2 text-green-900 text-sm md:text-base">
              <i className="fa-solid fa-shield"></i> Nutritious: Gluten-free,
              high fiber, iron & calcium rich
            </li>

            <li className="text-green-900 text-sm md:text-base">
              <i className="fa-solid fa-arrow-trend-up"></i> Growing market:
              ₹86,000 crore market at 6.8% CAGR
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
          <img
            src="/image2.png"
            alt="grains"
            className="max-w-full h-auto md:ml-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Future;
