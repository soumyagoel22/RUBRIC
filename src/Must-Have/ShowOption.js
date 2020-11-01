import React from "react";

const ShowOption = ({ type, name, val }) => {
  return (
    <>
      <label>
        <input type={type} name={name} />
        {val}
        {" "}
      </label>
    </>
  );
};

export default ShowOption;
