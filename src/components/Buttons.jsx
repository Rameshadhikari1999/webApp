import React from "react";
import { Tooltip } from "react-tooltip";

const Button = ({ title }) => {
  return (

      <button
        type="submit"
        className="bg-gradient-to-r font-mono from-cyan-500 to-blue-500 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700  hover:text-gray-400 font-bold py-2 px-4 cursor-pointer rounded mx-3"
      >
        {title}
      </button>

  );
};

export default Button;
