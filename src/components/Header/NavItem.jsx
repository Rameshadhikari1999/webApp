import React from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-scroll";
const NavItem = ({ icon: Icon, active, onClick, title }) => {
  return (
    <>
      <li
        data-tooltip-id={title}
        className={`text-3xl cursor-pointer ${
          active && "text-gray-200"
        } text-gray-400 
          md:flex md:items-baselines md:gap-2 md:text-2xl
        `}
      >
        <Link
          onClick={onClick}
          className={`${title ? "flex items-baselines gap-2s text-2xl p-5" : ""}`}
          to={title.toLowerCase()}
          smooth
          duration={500}
        >
        {Icon ? <Icon /> : ""} <span className="hidden md:block">{title}</span>
        </Link>

      </li>
      <Tooltip id={title} content={title} effect="solid" />
    </>
  );
};

export default NavItem;
