import React from 'react';
function Information() {
    return (
      <div className="container">
        <div className="row-4 mt-8 text-center">
          <h1 style={{ fontFamily: "Roboto Slab" }}>Why ShreeAnna.com?</h1>
          <p className="text-gray-500 mb-4">
            A millet-specific platform designed for India's agricultural
            ecosystem.
          </p>
        </div>

        <div className="flex gap-6 flex-wrap justify-center mt-[25px]">
          <div
            className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                  w-[320px] 
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                  hover:-translate-y-2 transition duration-300"
          >
            <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex flex-wrap justify-center content-center">
              <i class="fa-solid fa-plant-wilt"></i>
            </div>
            <h5 className="text-2xl font-bold mb-2">Smart Product Listing</h5>
            <p className="text-gray-500">
              Farmers list millets with variety, price, stock & crop details in
              seconds.
            </p>
          </div>
          <div
            className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                  w-[320px] 
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                  hover:-translate-y-2 transition duration-300"
          >
            <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex flex-wrap justify-center content-center">
              <i class="fa-solid fa-shield"></i>
            </div>
            <h5 className="text-2xl font-bold mb-2">QR Traceability</h5>
            <p className="text-gray-500">
              Farm-to-fork tracking with QR codes & FSSAI validation for
              consumer trust.
            </p>
          </div>
          <div
            className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                  w-[320px] 
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                  hover:-translate-y-2 transition duration-300"
          >
            <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex flex-wrap justify-center content-center">
              <i class="fa-solid fa-language"></i>
            </div>
            <h5 className="text-2xl font-bold mb-2">Multilingual Support</h5>
            <p className="text-gray-500">
              Platform available in Hindi, English, and regional languages.
            </p>
          </div>
        </div>

        <div className="flex gap-6 flex-wrap justify-center mt-[35px]">
          <div
            className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                  w-[320px] 
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                  hover:-translate-y-2 transition duration-300"
          >
            <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex flex-wrap justify-center content-center">
              <i class="fa-solid fa-mobile"></i>
            </div>
            <h5 className="text-2xl font-bold mb-2">Offline Ready</h5>
            <p className="text-gray-500">
              Works without internet using IndexedDB. Syncs when back online.
            </p>
          </div>
          <div
            className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                  w-[320px] 
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                  hover:-translate-y-2 transition duration-300"
          >
            <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex flex-wrap justify-center content-center">
              <i class="fa-solid fa-chart-bar"></i>
            </div>
            <h5 className="text-2xl font-bold mb-2">Analytics & Insights</h5>
            <p className="text-gray-500">
              Sales reports, buyer preferences, and smart suggestions for
              farmers.
            </p>
          </div>
          <div
            className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                  w-[320px] 
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                  hover:-translate-y-2 transition duration-300"
          >
            <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex flex-wrap justify-center content-center">
              <i class="fa-solid fa-people-line"></i>
            </div>
            <h5 className="text-2xl font-bold mb-2">Direct Market Access</h5>
            <p className="text-gray-500">
              Connect farmers, FPOs, SHGs directly with buyers. No middlemen.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Information;