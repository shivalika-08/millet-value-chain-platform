import React from "react";
import { useNavigate } from "react-router-dom";

function JoinUs() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 md:px-10 cursor-pointer">
      <div className="m-4 p-4 text-center">
        <h1 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          Join the Millet Revolution
        </h1>

        <p className="text-gray-600 text-sm sm:text-base">
          Whether you're a farmer, FPO, buyer, or processor ShreeAnna.com
          connects you to <br /> the millet value chain.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
          <button
            className="btn btn-success btn-lg"
            onClick={() => navigate("/Signup")}
          >
            Register as farmer
          </button>

          <button className="btn btn-outline-warning btn-lg text-black">
            Start Buying
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
