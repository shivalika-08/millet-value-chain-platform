import React from 'react';
function Impact() {
    return (
      <div className="w-full h-[50vh] text-white bg-gradient-to-r from-[#143926] via-[#405613] to-[#a87b09]">
        <h2 className="text-9xl md:text-4xl font-bold text-center mb-10 mt-30 py-15">
          Impact & Potential
        </h2>

        <div className="flex flex-wrap justify-around items-center text-center gap-8 px-4">
          <div>
            <span className="text-4xl text-amber-500">
              <i class="fa-solid fa-people-group"></i>
            </span>
            <div className="text-3xl md:text-4xl font-bold">2.5 Cr+</div>
            <p className="text-sm mt-2">Farmers Empowered</p>
          </div>

          <div>
            <span className="text-4xl text-amber-500">
              <i class="fa-solid fa-arrow-trend-up"></i>
            </span>
            <div className="text-3xl md:text-4xl font-bold">40-60%</div>
            <p className="text-sm mt-2">Higher Income</p>
          </div>

          <div>
            <span className="text-4xl text-amber-500">
              <i class="fa-solid fa-droplet"></i>
            </span>
            <div className="text-3xl md:text-4xl font-bold">70%</div>
            <p className="text-sm mt-2">Less Water Used</p>
          </div>

          <div>
            <span className="text-4xl text-amber-500">
              <i class="fa-solid fa-leaf"></i>
            </span>
            <div className="text-3xl md:text-4xl font-bold">₹86K Cr</div>
            <p className="text-sm mt-2">Market Size</p>
          </div>
        </div>
      </div>
    );

}

export default Impact;