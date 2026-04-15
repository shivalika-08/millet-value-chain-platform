import React from 'react';

function Hero() {
    return (
      <div className="container-fluid p-0">
        <div className="position-relative">
          <img
            src="/picture1.jpg"
            className="w-100 h-100"
            alt="hero image"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="container position-absolute top-50 translate-middle-y text-white ms-4 p-4">
            <span className="inline-block px-4 py-2.5 rounded-full bg-yellow-500/90 text-black text-sm font-semibold">
              🌾 Shree Anna for Shreshta Bharat
            </span>
            <h1
              className="text-9xl mt-4 mb-2"
              style={{ fontFamily: "Roboto Slab" }}
            >
              Millet Value Chain <br></br> Platform
            </h1>
            <p className="text-gray-200 mt-2 fs-5 ">
              Connecting millet farmers, FPOs, and SHGs directly to buyers
              <br></br> and processors. Fair prices, QR traceability, and
              government <br></br> scheme integration all in one place.
            </p>
            <button className="btn btn-success btn-lg me-4">Get Started</button>
            <button className="btn btn-outline-secondary btn-lg">
              Browse Millets
            </button>
          </div>
        </div>
      </div>
    );
}

export default Hero;