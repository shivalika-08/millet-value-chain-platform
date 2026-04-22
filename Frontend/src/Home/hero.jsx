import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="w-full p-0 mt-17 cursor-pointer">
      <div className="relative">
        {/* Background Image */}
        <img
          src="/picture1.jpg"
          className="w-full h-[60vh] md:h-[80vh] object-cover"
          alt="hero image"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="text-white px-4 md:px-10">
            <span className="inline-block px-4 py-2.5 rounded-full bg-yellow-500/90 text-black text-sm font-semibold">
              🌾 Shree Anna for Shreshta Bharat
            </span>

            <h1 className="mt-4 mb-2 font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight">
              Millet Value Chain <br /> Platform
            </h1>

            <p className="text-gray-200 mt-2 text-sm sm:text-base md:text-lg">
              Connecting millet farmers, FPOs, and SHGs directly to buyers
              <br /> and processors. Fair prices, QR traceability, and
              government <br /> scheme integration all in one place.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                className="btn btn-success btn-lg"
                onClick={() => navigate("/Signup")}
              >
                Get Started
              </button>

              <button className="btn btn-outline-secondary btn-lg">
                Browse Millets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
