import React from "react";
import './Loader.css';
import Logo from "../Logo";

const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <Logo/>
      <p>{text}</p>
    </div>
  );
};

export default Loader;
