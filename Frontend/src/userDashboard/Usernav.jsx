import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Farmnav({ setActiveTab }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 z-50"
      style={{ backgroundColor: "rgba(0, 60, 0, 0.8)" }}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        <h4 className="font-bold font-serif text-xl sm:text-2xl md:text-3xl text-white">
          ShreeAnna.com
        </h4>

        <div className="md:hidden text-white text-2xl cursor-pointer">
          <i
            className={`fa-solid ${open ? "fa-x" : "fa-bars"}`}
            onClick={() => setOpen(!open)}
          ></i>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              className="text-white font-bold no-underline!"
              onClick={() => setActiveTab("marketplace")}
            >
              {t("marketplace")}
            </Link>
          </li>

          <li>
            <Link
              className="text-white font-bold no-underline!"
              onClick={() => setActiveTab("cart")}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>

          <li>
            <Link
              className="text-white font-bold no-underline!"
              onClick={() => setActiveTab("dashboard")}
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

          <li>
            {!langOpen && (
              <i
                className="fa-solid fa-language text-white text-xl cursor-pointer"
                onClick={() => setLangOpen(true)}
              ></i>
            )}

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

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-[rgba(0,60,0,0.9)]">
          <Link
            className="text-white font-bold no-underline!"
            onClick={() => setOpen(false)}
            onClick={() => setActiveTab("marketplace")}
          >
            {t("marketplace")}
          </Link>

          <Link
            className="text-white font-bold no-underline!"
            onClick={() => setOpen(false)}
            onClick= {() => setActiveTab("dashboard")}
          >
            {t("dashboard")}
          </Link>

          <Link
            className="text-white font-bold no-underline!"
            onClick={() => setActiveTab("cart")}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <Link
            to={"/Aboutus"}
            className="text-white font-bold no-underline!"
            onClick={() => setOpen(false)}
          >
            {t("about")}
          </Link>

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
