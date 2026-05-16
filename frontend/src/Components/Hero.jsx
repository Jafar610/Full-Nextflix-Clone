import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
function Hero() {
  return (
    <>
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/93/bc/eb/93bceb9dc583c4511b9742b182b763aa.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#111] to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-bold mb-4 ">YOU</h1>
          <p className="text-lg mb-6 w-150">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            praesentium ea aliquid voluptatem sapiente a odio nihil explicabo,
            temporibus qui.
          </p>
          <div className="flex justify-start items-center gap-3">
            <div className="flex justify-center items-center gap-2 border border-[#E50914] px-5 py-2 rounded-md bg-[#E50914] text-white font-medium mr-5 cursor-pointer hover:bg-[#E50914]/90 transition duration-300 ease-in-out">
              <PlayCircleIcon className="text-4xl text-white mr-2" />
              <span className="text-1xl font-medium">Play</span>
            </div>

            <div className="flex justify-center items-center gap-2 border border-gray-300 px-5 py-2 rounded-md bg-transparent text-gray-300 font-medium cursor-pointer hover:bg-gray-900 hover:text-black transition duration-300 ease-in-out">
              <AddCircleIcon className="text-5xl text-white mr-2 cursor-pointer" />
              <span className="text-1xl text-white font-medium cursor-pointer">
                My List
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
