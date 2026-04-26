import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="w-full fixed top-0 z-50 cursor-pointer"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-2">
        {/* Logo */}
        <h4 className="font-bold text-xl sm:text-2xl md:text-3xl font-serif">
          ShreeAnna.com
        </h4>

        {/* Links */}
        <ul className="flex gap-4 sm:gap-6 md:gap-10 items-center">
          
          <li>
            <Link
              to={"/Signup"}
              className="text-black text-sm sm:text-base font-bold font-roboto no-underline!"
            >
              SignUp
            </Link>
          </li>

          <li>
            <Link
              to={"/Aboutus"}
              className="text-black text-sm sm:text-base font-bold font-roboto no-underline!"
            >
              Aboutus
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
