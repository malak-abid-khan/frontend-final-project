import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Products from "@/components/home/Products";
import SubMenu from "@/components/home/SubMenu";
import React from "react";

const ClientSide = () => {
  return (
    <main>
      <Navbar />
      <SubMenu />
      <Hero />
      <Products />
    </main>
  );
};

export default ClientSide;
