import React, { useState } from "react";
import { Link } from "react-router-dom";


function Farmnav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 z-50"
      style={{ backgroundColor: "rgba(0, 60, 0, 0.8)" }}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        
        {/* Logo */}
        <h4 className="font-bold font-serif text-xl sm:text-2xl md:text-3xl text-white">
          ShreeAnna.com
        </h4>

     
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => {
              i18n.changeLanguage("en");
              localStorage.setItem("lang", "en");
            }}
            className="px-2 py-1 bg-white text-black rounded"
          >
            EN
          </button>

          <button
            onClick={() => {
              i18n.changeLanguage("hi");
              localStorage.setItem("lang", "hi");
            }}
            className="px-2 py-1 bg-white text-black rounded"
          >
            HI
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          <i
            className={`fa-solid ${open ? "fa-x" : "fa-bars"}`}
            onClick={() => setOpen(!open)}
          ></i>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to={"/Aboutus"} className="text-white font-bold">
              {t("marketplace")}
            </Link>
          </li>
          <li>
            <Link to={"/Aboutus"} className="text-white font-bold">
              {t("dashboard")}
            </Link>
          </li>
          <li>
            <Link to={"/Aboutus"} className="text-white font-bold">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link to={"/Signup"} className="text-white font-bold">
              {t("signup")}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-[rgba(0,60,0,0.9)]">
          
        
          <div className="flex gap-2">
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                localStorage.setItem("lang", "en");
              }}
              className="px-2 py-1 bg-white text-black rounded"
            >
              EN
            </button>

            <button
              onClick={() => {
                i18n.changeLanguage("hi");
                localStorage.setItem("lang", "hi");
              }}
              className="px-2 py-1 bg-white text-black rounded"
            >
              HI
            </button>
          </div>

          <Link to={"/Aboutus"} className="text-white font-bold" onClick={() => setOpen(false)}>
            {t("marketplace")}
          </Link>
          <Link to={"/Aboutus"} className="text-white font-bold" onClick={() => setOpen(false)}>
            {t("dashboard")}
          </Link>
          <Link to={"/Aboutus"} className="text-white font-bold" onClick={() => setOpen(false)}>
            {t("about")}
          </Link>
          <Link to={"/Signup"} className="text-white font-bold" onClick={() => setOpen(false)}>
            {t("signup")}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Farmnav;