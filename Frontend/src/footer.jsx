import React from "react";

function Footer() {
  return (
    <div className="w-full mt-auto bg-olive-100 border-t-2 border-gray-300 cursor-pointer">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {/* Column 1 */}
        <div>
          <h4 className="text-sm font-serif">ShreeAnna.com</h4>
          <p className="text-gray-500 font-montserrat text-sm">
            Connecting millet farmers to markets. <br />
            Empowering Shree Anna for a healthier India.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-sm font-roboto-slab">Platform</h4>
          <ul className="text-gray-500 font-montserrat text-sm space-y-1">
            <li>MarketPlace</li>
            <li>Register as Farmer</li>
            <li>About Millets</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-sm font-roboto-slab">Government Schemes</h4>
          <ul className="text-gray-500 font-montserrat text-sm space-y-1">
            <li>PM-Kisan Samman Nidhi</li>
            <li>National Millet Mission</li>
            <li>Odisha Millets Mission</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h5 className="text-sm font-roboto-slab">Support</h5>
          <ul className="text-gray-500 font-montserrat text-sm space-y-1">
            <li>About Us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-3 pt-3">
        <p className="text-gray-500 text-center m-0 font-montserrat text-sm">
          © 2026 ShreeAnna.com Built for Millet Mission India
        </p>
      </div>
    </div>
  );
}

export default Footer;
