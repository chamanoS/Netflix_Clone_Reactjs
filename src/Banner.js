import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.lenght - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
      <header className="banner" style={{
         backgroundSize:"cover",
         backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
         backgroundPosition:"center center",  
      }}>
          <div className="banner_contents">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          </div>
      </header>
  )
}

export default Banner;
