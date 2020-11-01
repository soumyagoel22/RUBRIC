import React from "react";

const ShowInput = ({ name, type, value, onChange }) => {
  return (
    <div className="showInput">
      <label>
        {name}
        <br />
        <input type={type} value={value} onChange={onChange} required />
      </label>
    </div>
  );
};

export default ShowInput;
