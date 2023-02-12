import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Root;
