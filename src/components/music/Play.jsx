import React, { useEffect, useRef, useState } from "react";
import { CgPlayTrackPrev } from "react-icons/cg";
import { FaPlay } from "react-icons/fa6";
import { MdSkipNext } from "react-icons/md";
import { LuPauseCircle } from "react-icons/lu";
import { GrLinkPrevious } from "react-icons/gr";
import { musicList } from "../../assets/contents";
import { useLocation } from "react-router-dom";

const Play = () => {

  const location = useLocation();
  let item = location.state || {};

  const [currentTrackIndex, setCurrentTrackIndex] = useState(item.id);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);


  const playlist = musicList;

  // console.log(item);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handleBack = () => {
    window.history.back();
  };
  useEffect(() => {
    // Play the new track automatically when the index changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, isPlaying]);

  // update process bar and time
  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentTrackIndex]);

  const handleProgressChange = (e) => {
    const newTime = (e.target.value * duration) / 100;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-gray-500 via-gray-700 to-blue-200  relative text-white">
      <div onClick={handleBack} className="absolute top-5 left-5 text-red-500 text-4xl cursor-pointer">
      <GrLinkPrevious />
      </div>
      <div className="h-[70vh]">
        <img
          src={playlist? playlist[currentTrackIndex].img : ""}
          className="h-full w-full rounded"
          alt="banner"
        />
      </div>
      <p className="text-center mt-10 capitalize font-mono text-2xl md:text-4xl text-white ">
        {playlist? playlist[currentTrackIndex].title : ""}
      </p>
      <audio ref={audioRef} src={playlist[currentTrackIndex].song}  />
      <div className="w-full absolute bottom-0">
        <div className="w-3/4 mx-auto">
          <input
            className="w-full cursor-pointer"
            type="range"
            name="progress"
            id="progress"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleProgressChange}
          />
        </div>
        <div className="flex items-center gap-5 justify-center py-5">
          <span onClick={handlePrevious} className="text-3xl cursor-pointer">
            <CgPlayTrackPrev />
          </span>
          <span onClick={handlePlayPause} className="text-3xl cursor-pointer">
            {isPlaying ? <LuPauseCircle /> : <FaPlay />}
          </span>
          <span onClick={handleNext} className="text-3xl cursor-pointer">
            <MdSkipNext />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Play;
