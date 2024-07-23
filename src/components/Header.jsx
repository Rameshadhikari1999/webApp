import React,{useEffect, useState} from "react";
import NavItem from "./Header/NavItem.jsx";
import { menuList } from "../assets/contents/index.jsx";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
    const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenSize < 768;
  const isTablet = screenSize >= 768 && screenSize < 1024;

  return (
    <nav className="w-full h-screen relative">
    <div className={`bg-black text-white p-5 z-10 ${isMobile ? "w-full absolute bottom-0" : isTablet ? "h-full w-1/4 absolute left-0 " : "w-full absolute top-0"}`}>
      <ul className="flex md:flex-col lg:flex-row md:items-starts items-center justify-around">
        {menuList.map((menu) => (
          <NavItem
            key={menu.id}
            id={menu.id}
            title={!isMobile  ? menu.title : ""}
            icon={menu.icon}
            active={currentIndex === menu.id}
            onClick={() => setCurrentIndex(menu.id)}
          />
        ))}
      </ul>
    </div>
  </nav>
  );
};

export default Header;
