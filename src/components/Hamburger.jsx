import React, { useState } from "react";

const Hamburger = () => {
  const [menuOpen, toggle] = useState(false);

  return (
    <span className="menu-hamburger" onClick={() => toggle(!menuOpen)}>
      <svg
        width="40px"
        height="40px"
        strokeWidth="2px"
        stroke={menuOpen ? "#000" : "#fff"}
        strokeLinecap="round"
      >
        <path d={menuOpen ? "m 0 10, 25 20" : "m 0 10, 25 0"} />
        <path d="m 0 18, 25 0" style={{ opacity: menuOpen ? 0 : 1 }} />
        <path d={menuOpen ? "m 0 30, 25 -20" : "m 0 26, 25 0"} />
      </svg>
    </span>
  );
};

export default Hamburger;
