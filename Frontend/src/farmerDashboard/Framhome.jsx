import React from "react";
import { useState } from "react";

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
        setActiveTab={setActiveTab}
        openModel={() => setShowModal(true)}
      />
      <div className="p-2">{renderComponent()}</div>
      <Footer />

      {showModal && <AddproductForm closeModal={() => setShowModal(false)} />}
    </>
  );
}

export default Framhome;
