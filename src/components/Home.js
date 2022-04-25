import React from "react";
import requests from "../ApiKey";
import MovieRows from "./MovieRows";
import Banner from "./Banner";
function Home() {
  return (
    <div className="bg-[#111]">
      <Banner />
      <MovieRows
        title={"NETFLIX ORIGINAL"}
        movieData={requests.netflixOriginals}
        isLargeRow
      />
      <MovieRows title={"Trending Now"} movieData={requests.trending} />
      <MovieRows title={"Top Rated"} movieData={requests.topRated} />
      <MovieRows title={"Action Movies"} movieData={requests.actionMovies} />
      <MovieRows title={"Comedy Movies"} movieData={requests.comedyMovies} />
      <MovieRows title={"Romance Movies"} movieData={requests.romanceMovies} />
      <MovieRows title={"Horror Movies"} movieData={requests.horrorMovies} />
      <MovieRows title={"Documentaries"} movieData={requests.documentaries} />
    </div>
  );
}

export default Home;
