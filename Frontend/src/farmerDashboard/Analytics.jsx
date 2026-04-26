import React from "react";

function Analytics() {
  return (
    <div className="mx-2 p-2 font-roboto font-semibold cursor-pointer">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Sales Overview */}
        <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
          <h5 className="font-serif font-extralight">Sales Overview</h5>

          <div className="mb-5">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Jan</span>
              <input
                type="range"
                min="0"
                max="100"
                value="40"
                className="w-full"
                readOnly
              />
              <span className="text-gray-500">12k</span>
            </div>
          </div>
        </div>

        {/* Top Buyers */}
        <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
          <h5 className="font-serif font-extralight">Top Buyers</h5>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center rounded-xl bg-gray-300 p-2">
              <div className="text-xs">
                <h6 className="font-light">Name</h6>
                <p className="text-gray-500">Location</p>
              </div>
              <div className="text-sm text-green-900">
                <p>
                  <i className="fa-solid fa-indian-rupee-sign mr-1"></i>14,000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Suggestions */}
        <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
          <h5 className="font-serif font-extralight">Smart Suggestions</h5>

          <ul className="text-green-900 font-light font-roboto text-sm sm:text-base space-y-2">
            <li>
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>
              Finger Millet demand is up 23% this month consider listing more.
            </li>
            <li>
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>
              Your Bajra pricing is 8% below market average, Consider adjusting.
            </li>
            <li>
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>3 buyers from
              Bangalore searched for organic Jowar. You have stock!
            </li>
          </ul>
        </div>

        {/* Government Schemes */}
        <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
          <h5 className="font-serif font-extralight">Government Schemes</h5>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row justify-between rounded-xl bg-gray-300 p-2">
              <div className="text-xs">
                <h6 className="font-light">PM-Kisan Samman Nidhi</h6>
                <p className="text-gray-500">
                  ₹6,000/year — Next installment due May 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
