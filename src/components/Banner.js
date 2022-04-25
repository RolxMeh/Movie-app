import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../ApiKey";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(requests.trending)
        .catch((error) => console.log(error));
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="pt-40 text-white h-[445px] object-contain"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="h-48 ml-8">
        <h1 className="text-3xl font-bold pb-1">
          {movie?.name || movie?.title || movie?.original_title}
        </h1>
        <div>
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h2 className="w-[45rem] h-20 max-w-sm pt-4 text-sm">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>

      <div className="bg-gradient-to-b from from-transparent to-gr1 to-gr2 h-32" />
    </header>
  );
}

export default Banner;
