import React from "react";
import img1 from "../../assets/images/img-1.jpg";
import {musicList} from "../../assets/contents/index.jsx";
import {useNavigate} from 'react-router-dom'

const Music = () => {

  const navigate = useNavigate();

  const handleMusic = (item) => {
    console.log("music");
    navigate("/music/play",{state:item});
  };

  return (
    <div id="music" className="w-full md:w-[80%] h-fit lg:w-full bg-gray-200">

      <section className="flex items-center gap-3 justify-around flex-grow flex-wrap flex-shrink p-5">
      {musicList.map((item) => (
        <div key={item.id} onClick={()=>handleMusic(item)} className="w-1/3 md:w-1/4 p-3 shadow-sm hover:scale-105 rounded cursor-pointer shadow-gray-500">
        <div>
          <img src={item.img} alt="" />
        </div>
        <h3>{item.title}</h3>
      </div>
      ))}
        
      </section>
    </div>
  );
};

export default Music;
