import React from "react";
import "./Header.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <div className="icon-arrow">
        <AiOutlineArrowLeft />
      </div>
      <h2>QUIZ APP</h2>
    </div>
  );
};

export default Header;
