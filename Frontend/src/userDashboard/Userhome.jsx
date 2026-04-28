import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Marketplace from "./marketPlace";
import Usernav from "./Usernav";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Footer from "../footer";
import { CartContext } from "../CartContext.jsx";


function Userhome() {
<<<<<<< Updated upstream
  const [activeTab, setActiveTab] = useState("marketplace");
=======

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tabFromURL = params.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromURL || "marketplace");

 useEffect(() => {
   const params = new URLSearchParams(location.search);
   const tab = params.get("tab");
   if (tab) setActiveTab(tab);
 }, [location]);


>>>>>>> Stashed changes

  const renderComponent = () => {
    switch (activeTab) {
      case "cart":
        return <Cart />;
      case "dashboard":
        return <Dashboard />;
      case "marketplace":
        return <Marketplace />;
      default:
        return <Marketplace />;
    }
  };

  return (
    <>
      <Usernav
        setActiveTab={setActiveTab}
      />
      <div className="p-2">{renderComponent()}</div>
      <Footer />
    </>
  );
}

export default Userhome;