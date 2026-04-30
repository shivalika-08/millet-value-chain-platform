import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProductListing from "./ProductListing";
import Analytics from "./Analytics";
import Order from "./order";

import Farmernav from "./framnav";
import Header from "./Header";
import AddproductForm from "./AddproductForm";

import Footer from "../footer";

function Framhome() {
  const [activeTab, setActiveTab] = useState("products");
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState(null);

  // const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)


  const navigate = useNavigate();


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/login");
    } else if (storedUser.role !== "farmer") {
      navigate("/"); 
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  
  const renderComponent = () => {
    switch (activeTab) {
      case "products":
        return <ProductListing />;
      case "orders":
        return <Order />;
      case "analytics":
        return <Analytics />;
      default:
        return <ProductListing />;
    }
  };

  return (
    <>
      <Farmernav />

      <Header
        user={user}
        setActiveTab={setActiveTab}
        openModel={() => setShowModal(true)}
      />

      <div className="p-2">
        {user ? renderComponent() : <p>Loading...</p>}
      </div>

      <Footer />

      {showModal && (
        <AddproductForm closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Framhome;