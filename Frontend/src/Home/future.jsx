import React from 'react';
function Future() {
    return (
      <div className="container-fluid p-0 bg-olive-100 mt-20 h-[450px]">
        <div className="row">
          <div className="col-6 p-5 mt-5">
            <h2 className="m-4">The Superfood of the Future</h2>
            <p className="text-green-900">
              Millets are drought-tolerant, nutrient-rich ancient grains that
              use 70% less water than rice.<br></br> Rich in iron, calcium, and
              protein they're the answer to malnutrition and climate change
            </p>
            <ul>
              <li className="mb-2 text-green-900">
                <i class="fa-solid fa-leaf"></i> Eco-friendly: Minimal water,
                fertilizer, and pesticides needed
              </li>
              <li className="mb-2 text-green-900">
                <i class="fa-solid fa-shield"></i> Nutritious: Gluten-free, high
                fiber, iron & calcium rich
              </li>
              <li className="text-green-900">
                <i class="fa-solid fa-arrow-trend-up"></i> Growing market:
                ₹86,000 crore market at 6.8% CAGR
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img src="/image2.png" alt="grains" className='ms-30' />
          </div>
        </div>
      </div>
    );
}

export default Future;