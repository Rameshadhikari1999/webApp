import React, { useRef, useState, useEffect } from "react";
import videoSrc from "../../assets/videos/video-1.mp4";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  return (
    <div id="video" className="w-full md:w-[80%] lg:w-full h-full">
      <section className="flex items-center gap-3 justify-around flex-grow flex-wrap flex-shrink p-5">
        
          <video width="320" height="240" controls >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <video width="320" height="240" controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <video width="320" height="240" controls>
            <source src={videoSrc} type="video/mp4" />
          </video>  
      </section>
    </div>
  );
};

export default Video;
