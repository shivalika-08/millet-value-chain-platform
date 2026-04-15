import React from 'react';

function Footer() {
    return (
      <div className="container-fluid p-0 bg-olive-100 border-t-2 border-gray-300 m-0">
        <div className="row p-4 m-0">
          <div className="col-md-3">
            <h4 className="text-sm">ShreeAnna.com</h4>
            <p className="text-gray-500">
              Connecting millet farmers to markets. <br></br> Empowering Shree
              Anna for a healthier India.
            </p>
          </div>

          <div className="col-md-3">
            <h4 className="text-sm">Platform</h4>
            <ul className="text-gray-500 list-unstyled">
              <li>MarketPlace</li>
              <li>Register as Farmer</li>
              <li>About Millets</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h4 className="text-sm">Government Schemes</h4>
            <ul className="text-gray-500 list-unstyled">
              <li>PM-Kisan Samman Nidhi</li>
              <li>National Millet Mission</li>
              <li>Odisha Millets Mission</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-sm">Support</h5>
            <ul className="text-gray-500 list-unstyled">
              <li>About Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="col-12 border-top mt-3 pt-3">
            <p className="text-gray-500 text-center m-0">
              © 2026 ShreeAnna.com Built for Millet Mission India
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;