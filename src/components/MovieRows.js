import React, { useEffect, useState } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieRows({ title, movieData, isLargeRow }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(movieData)
        .catch((error) => console.log(error));
      setMovie(request.data.results);

      return request;
    }
    fetchData();
  }, [movieData]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMoviePlay = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className=" text-white">
      <h2 className="my-3 pl-3 font-bold">{title}</h2>
      <div className="ml-5 flex overflow-x-scroll overflow-y-hidden row">
        {movie.map((movie) => (
          <img
            className={`movie-poster ${isLargeRow && "large-movie-poster"}`}
            key={movie.id}
            onClick={() => handleMoviePlay(movie)}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default MovieRows;
