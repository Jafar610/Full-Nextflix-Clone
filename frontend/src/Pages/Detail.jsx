import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const formatMovie = (movie) => {
  if (!movie) return null;

  const title =
    movie.title || movie.name || movie.original_name || "Movie Title";
  const rating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : movie.rating || "N/A";
  const releaseDate =
    movie.release_date || movie.first_air_date || "2024-01-01";
  const year = releaseDate.slice(0, 4);
  const duration = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : movie.duration || "2h 15m";
  const ageRating = movie.adult ? "18+" : movie.ageRating || "16+";
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : movie.image ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRNrj_ilBOh0nfhXRZLd4mbINGj4qEEeZFQ&s";
  const overview =
    movie.overview ||
    movie.description ||
    "This is an amazing movie with a compelling storyline, great performances, and stunning cinematography. Perfect for anyone who loves this genre. A must-watch film that will keep you entertained from start to finish.";

  return {
    id: movie.id,
    title,
    rating,
    year,
    duration,
    ageRating,
    image,
    overview,
  };
};

function Detail() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock related movies data
  const relatedMovies = [
    {
      id: 1,
      title: "Movie Title",
      rating: 9.0,
      year: 2018,
      duration: "2h 30m",
      ageRating: "16+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRNrj_ilBOh0nfhXRZLd4mbINGj4qEEeZFQ&s",
      overview:
        "This is an amazing movie with a compelling storyline, great performances, and stunning cinematography.",
    },
    {
      id: 2,
      title: "Action Movie",
      rating: 8.5,
      year: 2019,
      duration: "2h 15m",
      ageRating: "18+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRNrj_ilBOh0nfhXRZLd4mbINGj4qEEeZFQ&s",
    },
    {
      id: 3,
      title: "Drama Film",
      rating: 8.8,
      year: 2020,
      duration: "2h 45m",
      ageRating: "13+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRNrj_ilBOh0nfhXRZLd4mbINGj4qEEeZFQ&s",
    },
    {
      id: 4,
      title: "Thriller",
      rating: 9.2,
      year: 2021,
      duration: "2h 10m",
      ageRating: "16+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRNrj_ilBOh0nfhXRZLd4mbINGj4qEEeZFQ&s",
    },
    {
      id: 5,
      title: "Adventure",
      rating: 8.3,
      year: 2022,
      duration: "2h 50m",
      ageRating: "PG",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRNrj_ilBOh0nfhXRZLd4mbINGj4qEEeZFQ&s",
      overview:
        "A thrilling mid-season adventure with unforgettable characters and a powerful emotional arc.",
    },
  ];

  const [currentMovie, setCurrentMovie] = useState(
    () => formatMovie(location.state?.movie) || relatedMovies[0],
  );

  useEffect(() => {
    if (location.state?.movie) {
      setCurrentMovie(formatMovie(location.state.movie));
    }
  }, [location.state?.movie]);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="text-gray-300 leading-relaxed">
            <p>{currentMovie.overview}</p>
          </div>
        );
      case "trailers":
        return (
          <div className="text-gray-300">
            <p>Trailers and promotional videos will be displayed here.</p>
            <div className="mt-4 flex gap-4">
              <div className="w-40 h-24 bg-gray-700 rounded flex items-center justify-center">
                Trailer 1
              </div>
              <div className="w-40 h-24 bg-gray-700 rounded flex items-center justify-center">
                Trailer 2
              </div>
            </div>
          </div>
        );
      case "morelike":
        return (
          <div className="text-gray-300">
            <p>More movies like this will be displayed here.</p>
          </div>
        );
      case "detailinfo":
        return (
          <div className="text-gray-300">
            <p>
              <strong>Director:</strong> John Director
            </p>
            <p>
              <strong>Cast:</strong> Actor Name, Another Actor
            </p>
            <p>
              <strong>Genre:</strong> Action, Thriller, Drama
            </p>
            <p>
              <strong>Language:</strong> English
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex gap-8 bg-[#111111] text-white px-15 py-10 overflow-y-auto">
        {/* Image - Left Side */}
        <div className="sticky top-10 flex-shrink-0 flex justify-center items-center h-fit">
          <div className="relative">
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-red-600 opacity-30 blur-3xl rounded-2xl transform -z-10"></div>

            {/* Image Container */}
            <img
              src={currentMovie.image}
              alt={currentMovie.title}
              className="w-80 h-auto rounded-2xl shadow-2xl hover:shadow-red-600/50 hover:shadow-2xl transform transition duration-300 hover:scale-105 border-2 border-gray-700 hover:border-red-600"
            />

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <StarIcon className="text-yellow-300 text-sm" />
              <span className="font-bold text-sm">{currentMovie.rating}</span>
            </div>
          </div>
        </div>
        {/* Detail Info - Right Side */}
        <div className="flex-1 flex flex-col gap-6 pb-10">
          {/* Movie title and Rate - Full Width */}
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl font-bold">{currentMovie.title}</h1>
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">{currentMovie.rating}</p>
              <StarIcon className="text-yellow-400" />
            </div>
          </div>

          {/* Movie date & movie time length */}
          <div>
            <h1 className="text-lg text-gray-300">
              {currentMovie.year} | {currentMovie.duration} |{" "}
              {currentMovie.ageRating}
            </h1>
          </div>

          {/* Navigation  */}
          <div>
            <ul className="flex gap-6 border-b border-gray-700 pb-4">
              <li
                onClick={() => setActiveTab("overview")}
                className={`cursor-pointer pb-2 ${
                  activeTab === "overview"
                    ? "border-b-2 border-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Overview
              </li>
              <li
                onClick={() => setActiveTab("trailers")}
                className={`cursor-pointer pb-2 ${
                  activeTab === "trailers"
                    ? "border-b-2 border-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Trailers & More
              </li>
              <li
                onClick={() => setActiveTab("morelike")}
                className={`cursor-pointer pb-2 ${
                  activeTab === "morelike"
                    ? "border-b-2 border-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                More Like this
              </li>
              <li
                onClick={() => setActiveTab("detailinfo")}
                className={`cursor-pointer pb-2 ${
                  activeTab === "detailinfo"
                    ? "border-b-2 border-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Detail Info
              </li>
            </ul>
          </div>

          {/* Detail Info Content */}
          <div className="text-sm">{renderContent()}</div>

          {/* Related Movies */}
          <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">Related Movies</h1>
            <div
              className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {relatedMovies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => setCurrentMovie(movie)}
                  className="flex-shrink-0 cursor-pointer transform transition hover:scale-105"
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className={`w-40 h-56 rounded-lg object-cover ${
                      currentMovie.id === movie.id ? "ring-4 ring-red-600" : ""
                    }`}
                  />
                  <p className="text-sm text-gray-300 mt-2 truncate">
                    {movie.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
