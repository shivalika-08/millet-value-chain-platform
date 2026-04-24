import React from "react";

function Order() {
  return (
    <div className="mx-2 p-3 font-roboto font-semibold cursor-pointer border-2 border-black rounded-xl bg-olive-200">
      <div className="flex flex-col gap-2">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h5>ORD001</h5>
            <p className="text-green-900 text-opacity-50 text-sm">2024-04-10</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <p className="rounded-full text-green-900 bg-gray-300 text-xs px-2 py-1">
              Confirmed
            </p>
            <p className="text-green-900">
              <i className="fa-solid fa-indian-rupee-sign mr-1"></i>14,000
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row gap-2 text-green-900 text-opacity-50 text-sm">
          <p>
            <i className="fa-solid fa-users mr-1"></i>Name
          </p>
          <p>
            <i className="fa-solid fa-location-dot mr-1"></i>Location
          </p>
        </div>

        {/* Row 3 */}
        <div>
          <p className="text-xs text-green-900">
            Pearl Millet (Bajra) <i className="fa-solid fa-x mx-1"></i> 5
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
