import React from "react";

function Information() {
  return (
    <div className="w-full px-4 md:px-10 cursor-pointer">
      {/* Heading */}
      <div className="mt-8 text-center">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl">
          Why ShreeAnna.com?
        </h1>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">
          A millet-specific platform designed for India's agricultural
          ecosystem.
        </p>
      </div>

      {/* Cards Row 1 */}
      <div className="flex gap-6 flex-wrap justify-center mt-[25px]">
        <div
          className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                        w-full sm:w-[320px]
                        hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                        hover:-translate-y-2 transition duration-300"
        >
          <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex justify-center items-center">
            <i className="fa-solid fa-plant-wilt"></i>
          </div>
          <h5 className="text-xl sm:text-2xl font-bold mb-2 font-roboto-slab">
            Smart Product Listing
          </h5>
          <p className="text-gray-500 text-sm sm:text-base">
            Farmers list millets with variety, price, stock & crop details in
            seconds.
          </p>
        </div>

        <div
          className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                        w-full sm:w-[320px]
                        hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                        hover:-translate-y-2 transition duration-300"
        >
          <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex justify-center items-center">
            <i className="fa-solid fa-shield"></i>
          </div>
          <h5 className="text-xl sm:text-2xl font-bold mb-2 font-roboto-slab">
            QR Traceability
          </h5>
          <p className="text-gray-500 text-sm sm:text-base">
            Farm-to-fork tracking with QR codes & FSSAI validation for consumer
            trust.
          </p>
        </div>

        <div
          className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                        w-full sm:w-[320px]
                        hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                        hover:-translate-y-2 transition duration-300"
        >
          <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex justify-center items-center">
            <i className="fa-solid fa-language"></i>
          </div>
          <h5 className="text-xl sm:text-2xl font-bold mb-2 font-roboto-slab">
            Multilingual Support
          </h5>
          <p className="text-gray-500 text-sm sm:text-base">
            Platform available in Hindi, English, and regional languages.
          </p>
        </div>
      </div>

      {/* Cards Row 2 */}
      <div className="flex gap-6 flex-wrap justify-center mt-[35px]">
        <div
          className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                        w-full sm:w-[320px]
                        hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                        hover:-translate-y-2 transition duration-300"
        >
          <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex justify-center items-center">
            <i className="fa-solid fa-mobile"></i>
          </div>
          <h5 className="text-xl sm:text-2xl font-bold mb-2 font-roboto-slab">
            Offline Ready
          </h5>
          <p className="text-gray-500 text-sm sm:text-base">
            Works without internet using IndexedDB. Syncs when back online.
          </p>
        </div>

        <div
          className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                        w-full sm:w-[320px]
                        hover:shadow-[0_12px_25px_rgba(0_12px_25px_rgba(0,0,0,0.2)] 
                        hover:-translate-y-2 transition duration-300"
        >
          <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex justify-center items-center">
            <i className="fa-solid fa-chart-bar"></i>
          </div>
          <h5 className="text-xl sm:text-2xl font-bold mb-2 font-roboto-slab">
            Analytics & Insights
          </h5>
          <p className="text-gray-500 text-sm sm:text-base">
            Sales reports, buyer preferences, and smart suggestions for farmers.
          </p>
        </div>

        <div
          className="p-5 bg-olive-100 rounded-2 border border-opacity-75 
                        w-full sm:w-[320px]
                        hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] 
                        hover:-translate-y-2 transition duration-300"
        >
          <div className="h-12 w-12 bg-olive-200 rounded-xl mb-4 hover:bg-olive-300 flex justify-center items-center">
            <i className="fa-solid fa-people-line"></i>
          </div>
          <h5 className="text-xl sm:text-2xl font-bold mb-2 font-roboto-slab">
            Direct Market Access
          </h5>
          <p className="text-gray-500 text-sm sm:text-base">
            Connect farmers, FPOs, SHGs directly with buyers. No middlemen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
