import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { requests } from "../api/tmdb";
function Row({ title, movies}) {

  return (
    <>
      <div className="flex justify-center items-center bg-[#121212] w-full text-white text-3xl font-bold">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>

          <Swiper
            className="py-4"
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Row;
