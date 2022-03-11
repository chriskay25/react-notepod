import React, { useState, useEffect } from "react";
import PodcastPreview from "./PodcastPreview";
import GenreNav from "./GenreNav";
import Podcast from "./Podcast";

const Home = () => {
  const [popularData, setPopularData] = useState(null);
  const [genres, setGenres] = useState(null);
  const [genre, setGenre] = useState(null);
  const [podcast, setPodcast] = useState(null);

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

  const getPodcast = async (podcastId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/search?type=podcast&podcast_id=${podcastId}`
      );
      const data = await response.json();
      setPodcast(data);
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
      {podcast && <Podcast podcast={podcast} />}
      {!podcast && <GenreNav genres={genres} getNewGenre={getNewGenre} />}
      {!podcast && (
        <div className="home-podcast-list-container">
          <h3
            style={{
              fontWeight: 300,
              margin: "2rem 0 2rem 0",
              textAlign: "center",
            }}
          >
            {genre && genre.name}
          </h3>
          <ul className="home-podcast-list">
            {popularData &&
              popularData.map((pod) => (
                <PodcastPreview
                  key={pod.id}
                  data={pod}
                  getPodcast={getPodcast}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
