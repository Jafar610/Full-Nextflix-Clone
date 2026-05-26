import React, { useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import axios from "axios";
import { requests } from "../api/tmdb";

function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.trending);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  if (!movie) return null;

  function truncate(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  return (
    <div
      className="h-[80vh] bg-cover bg-center relative flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#111] to-transparent"></div>

      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <p className="text-lg mb-6 w-150">{truncate(movie.overview, 150)}</p>

        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-[#E50914] px-5 py-2 rounded-md cursor-pointer">
            <PlayCircleIcon />
            Play
          </div>

          <div className="flex items-center gap-2 border px-5 py-2 rounded-md text-white cursor-pointer hover:bg-[#E50914] hover:text-white hover:border-[#E50914]">
            <AddCircleIcon />
            My List
          </div>

          <Link
            to="/detail"
            state={{ movie }}
            className="flex items-center gap-2 border px-5 py-2 rounded-md text-white cursor-pointer hover:bg-[#E50914] hover:text-white hover:border-[#E50914]"
          >
            <InfoIcon />
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
