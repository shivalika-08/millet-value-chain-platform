import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Farmnav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // for language buttons
  const [langOpen, setLangOpen] = useState(false);

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
            <Link
              to={"/marketPlace"}
              className="text-white font-bold no-underline!"
            >
              {t("marketplace")}
            </Link>
          </li>
          <li>
            <Link
              to={"/Framhome"}
              className="text-white font-bold no-underline!"
            >
              {t("dashboard")}
            </Link>
          </li>
          <li>
            <Link
              to={"/Aboutus"}
              className="text-white font-bold no-underline!"
            >
              {t("about")}
            </Link>
          </li>

          {/* Logout */}
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-white font-bold">
                {t("Logout")}
              </button>
            ) : (
              <Link to={"/Signup"} className="text-white font-bold">
                {t("signup")}
              </Link>
            )}
          </li>

          {/* language menu */}
          <li>
            {!langOpen && (
              <i
                className="fa-solid fa-language text-white text-xl cursor-pointer"
                onClick={() => setLangOpen(true)}
              ></i>
            )}

            {/* dropdown menu */}
            {langOpen && (
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
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-[rgba(0,60,0,0.9)]">
          <Link
            to={"/marketPlace"}
            className="text-white font-bold no-underline!"
            onClick={() => setOpen(false)}
          >
            {t("marketplace")}
          </Link>
          <Link
            to={"/Framhome"}
            className="text-white font-bold no-underline!"
            onClick={() => setOpen(false)}
          >
            {t("dashboard")}
          </Link>
          <Link
            to={"/Aboutus"}
            className="text-white font-bold no-underline!"
            onClick={() => setOpen(false)}
          >
            {t("about")}
          </Link>

          {/* Logout */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="text-white font-bold"
            >
              {t("Logout")}
            </button>
          ) : (
            <Link
              to={"/Signup"}
              className="text-white font-bold"
              onClick={() => setOpen(false)}
            >
              {t("signup")}
            </Link>
          )}

          <Link className="text-decoration-none">
            {!langOpen && (
              <i
                className="fa-solid fa-language text-white text-xl cursor-pointer"
                onClick={() => setLangOpen(true)}
              ></i>
            )}

            {/* dropdown menu */}
            {langOpen && (
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
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Farmnav;