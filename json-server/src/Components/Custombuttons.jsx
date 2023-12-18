import React from "react";
import "./Custombutton.css";
import { buttontypes } from "./Buttontypes";
const Custombutton = ({ onClick, buttontitle, type }) => {
  return (
    <button
      style={buttontypes[type]}
      className="custombutton"
      onClick={onClick}
    >
      {buttontitle}
    </button>
  );
};

export default Custombutton;
