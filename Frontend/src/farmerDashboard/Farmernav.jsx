import React, { useState } from "react";
import { Link } from "react-router-dom";

function Farmernav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 z-50 cursor-pointer"
      style={{ backgroundColor: "rgba(0, 60, 0, 0.8)" }}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        {/* Logo */}
        <h4 className="font-bold font-serif text-xl sm:text-2xl md:text-3xl">
          ShreeAnna.com
        </h4>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          <i
            className={`fa-solid ${open ? "fa-x" : "fa-bars"}`}
            onClick={() => setOpen(!open)}
          ></i>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to={"/Aboutus"} className="text-black font-bold">
              Marketplace
            </Link>
          </li>
          <li>
            <Link to={"/Aboutus"} className="text-black font-bold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/Aboutus"} className="text-black font-bold">
              Aboutus
            </Link>
          </li>
          <li>
            <Link to={"/Signup"} className="text-black font-bold">
              SignUp
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-[rgba(0,60,0,0.9)]">
          <Link
            to={"/Aboutus"}
            className="text-white font-bold"
            onClick={() => setOpen(false)}
          >
            Marketplace
          </Link>
          <Link
            to={"/Aboutus"}
            className="text-white font-bold"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to={"/Aboutus"}
            className="text-white font-bold"
            onClick={() => setOpen(false)}
          >
            Aboutus
          </Link>
          <Link
            to={"/Signup"}
            className="text-white font-bold"
            onClick={() => setOpen(false)}
          >
            SignUp
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Farmernav;
