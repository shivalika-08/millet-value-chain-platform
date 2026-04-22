import React from "react";

function Impact() {
  return (
    <div className="w-full text-white bg-gradient-to-r from-[#143926] via-[#405613] to-[#a87b09] cursor-pointer py-10 md:py-16">
      <h2
        className="font-bold text-center font-serif 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     mb-10"
      >
        Impact & Potential
      </h2>

      <div className="flex flex-wrap justify-center md:justify-around items-center text-center gap-8 px-4">
        <div className="font-roboto">
          <span className="text-3xl md:text-4xl text-amber-500">
            <i className="fa-solid fa-people-group"></i>
          </span>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
            2.5 Cr+
          </div>
          <p className="text-sm mt-2">Farmers Empowered</p>
        </div>

        <div className="font-roboto">
          <span className="text-3xl md:text-4xl text-amber-500">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </span>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
            40-60%
          </div>
          <p className="text-sm mt-2">Higher Income</p>
        </div>

        <div className="font-roboto">
          <span className="text-3xl md:text-4xl text-amber-500">
            <i className="fa-solid fa-droplet"></i>
          </span>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">70%</div>
          <p className="text-sm mt-2">Less Water Used</p>
        </div>

        <div className="font-roboto">
          <span className="text-3xl md:text-4xl text-amber-500">
            <i className="fa-solid fa-leaf"></i>
          </span>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
            ₹86K Cr
          </div>
          <p className="text-sm mt-2">Market Size</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
