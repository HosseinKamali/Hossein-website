import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="border-b-2">
        <Navbar />
      </div>

      {children}

      <div className="border-t-2">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
