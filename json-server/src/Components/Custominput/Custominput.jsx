import React from "react";
import "./Custominput.css";
const Custominput = ({ ref, onChange, value }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      ref={ref}
      type="text"
      className="inpt"
      placeholder="yazınız..."
    />
  );
};

export default Custominput;
