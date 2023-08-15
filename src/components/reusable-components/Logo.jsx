import React from "react";
import logo from '../assets/logo/first.png' ;

const Logo = () => {
  return <div className="logo">
     <img src={logo} alt="Logo First" className="w-24 h-24" />
  </div>;
};

export default Logo;