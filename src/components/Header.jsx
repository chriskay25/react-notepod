import React from "react";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header style={{ width: "100%", position: "sticky", top: "0", zIndex: 1 }}>
      <div style={{ position: "relative" }}>
        <Hamburger />
        <h1 className="app-title">NOTEPOD</h1>
      </div>
    </header>
  );
};

export default Header;
