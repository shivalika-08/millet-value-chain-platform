import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CartContext } from "../CartContext";

function Usernav() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isLoggedIn = !!localStorage.getItem("token");
  const [langOpen, setLangOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
      className="w-full fixed top-0 z-50"
      style={{ backgroundColor: "rgba(0, 60, 0, 0.8)" }}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        <h4 className="font-bold font-serif text-xl md:text-2xl text-white">
          ShreeAnna.com
        </h4>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl">
          <i
            className={`fa-solid ${open ? "fa-x" : "fa-bars"}`}
            onClick={() => setOpen(!open)}
          ></i>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              className="text-white font-bold"
              onClick={() => navigate("/Userhome?tab=marketplace")}
            >
              {t("marketplace")}
            </button>
          </li>

          <li>
            <button
              className="text-white font-bold relative"
              onClick={() => navigate("/Userhome?tab=cart")}
            >
              <i className="fa-solid fa-cart-shopping"></i>

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </li>

          <li>
            <button
              className="text-white font-bold"
              onClick={() => navigate("/Userhome?tab=dashboard")}
            >
              {t("dashboard")}
            </button>
          </li>

          <li>
            <Link to="/Aboutus" className="text-white font-bold no-underline!">
              {t("about")}
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-white font-bold">
                {t("Logout")}
              </button>
            ) : (
              <Link to="/Signup" className="text-white font-bold no-underline!">
                {t("signup")}
              </Link>
            )}
          </li>

          {/* Language */}
          <li>
            {!langOpen ? (
              <i
                className="fa-solid fa-language text-white text-xl cursor-pointer"
                onClick={() => setLangOpen(true)}
              ></i>
            ) : (
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
          <button
            className="text-white font-bold"
            onClick={() => {
              setOpen(false);
              navigate("/Userhome?tab=marketplace");
            }}
          >
            {t("marketplace")}
          </button>

          <button
            className="text-white font-bold"
            onClick={() => {
              setOpen(false);
              navigate("/Userhome?tab=dashboard");
            }}
          >
            {t("dashboard")}
          </button>

          {/* ✅ Mobile Cart with Badge */}
          <button
            className="text-white font-bold relative"
            onClick={() => {
              setOpen(false);
              navigate("/Userhome?tab=cart");
            }}
          >
            <i className="fa-solid fa-cart-shopping text-xl"></i>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>

          <Link
            to="/Aboutus"
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
              to="/Signup"
              className="text-white font-bold no-underline!"
              onClick={() => setOpen(false)}
            >
              {t("signup")}
            </Link>
          )}

          {/* Language (mobile) */}
          <div>
            {!langOpen ? (
              <i
                className="fa-solid fa-language text-white text-xl cursor-pointer"
                onClick={() => setLangOpen(true)}
              ></i>
            ) : (
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
          </div>
        </div>
      )}
    </nav>
  );
}

export default Usernav;
