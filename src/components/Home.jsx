import React, { useState, useEffect } from "react";
import Podcast from "./Podcast";
import GenreNav from "./GenreNav";

const Home = () => {
  const [popularData, setPopularData] = useState(null);
  const [genres, setGenres] = useState(null);
  const [genre, setGenre] = useState(null);

  const getPopular = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/search?type=popular"
      );
      const data = await response.json();
      setPopularData(data.podcasts);
    } catch (err) {
      console.log(err);
    }
  };

  const getGenres = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/search?type=genres"
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (err) {
      console.log(err);
    }
  };

  const getNewGenre = async (newGenre) => {
    setGenre(newGenre);
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/search?type=popular&genre_id=${newGenre.id}`
      );
      const data = await response.json();
      setPopularData(data.podcasts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const populateHome = async () => {
      await getPopular();
      await getGenres();
    };

    populateHome();
  }, []);

  return (
    <div className="home">
      <GenreNav genres={genres} getNewGenre={getNewGenre} />
      <div className="home-podcast-list-container">
        <h3 style={{ fontWeight: 400 }}>{genre && genre.name}</h3>
        <ul className="home-podcast-list">
          {popularData &&
            popularData.map((pod) => <Podcast key={pod.id} data={pod} />)}
        </ul>
      </div>
    </div>
  );
};

export default Home;
