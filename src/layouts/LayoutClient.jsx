import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

const LayoutClient = ({ children, data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Slide />
      <Footer />
    </>
  );
};

export default LayoutClient;
