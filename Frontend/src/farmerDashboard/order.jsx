import React from 'react';

function Order() {
    return (
      <div className='className="mx-2 p-1 font-roboto font-semibold"'>
        <div className="grid grid-row-2 sm:grid-row-2 md:grid-row-4 gap-3">
          <div className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">
            <div className="flex flex-col justify-evenly content-start">
              <div className="flex flex-row justify-between content-center">
                <div className="flex flex-row justfy-evenly content-start">
                  <h5>ORD001</h5>
                  <p className="text-gray-500">2024-04-10</p>
                </div>
                <div className="flex flex-row justify-evenly content-center">
                  <h6 className="rounded-pill border-2 ">confirmed</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    14000
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-start content-center">
                  <h6>
                    <i class="fa-solid fa-users"></i>Name
                  </h6>
                  <p>Location</p>
                </div>
              </div>
              <div>
                Pearl Millet (Bajra) <i class="fa-solid fa-x"></i> 5
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Order;