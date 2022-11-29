import React from "react";

function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="block w-full  p-3 border-gray-300 rounded-md"
    />
  );
}

export default Input;
