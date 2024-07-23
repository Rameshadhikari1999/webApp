import React from "react";
import { Tooltip } from "react-tooltip";
const NavItem = ({ icon: Icon, active, onClick, title }) => {
  return (
    <>
      <li
        data-tooltip-id={title}
        onClick={onClick}
        className={`text-3xl cursor-pointer ${
          active && "text-red-500"
        } text-gray-400 ${title? "flex items-baselines gap-2s text-2xl p-5":""}`}
      >
      {Icon?<Icon/>:""}  <span>{title ? title : ""}</span>
      </li>
      <Tooltip id={title} content={title}  effect="solid" />
    </>
  );
};

export default NavItem;
