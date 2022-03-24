import React, { useEffect } from "react";
import PodcastPreview from "./PodcastPreview";
import GenreNav from "./GenreNav";
import Podcast from "./Podcast";
import { useDispatch, useSelector } from "react-redux";
import { getPodcasts, getGenres } from "../actions/podcasts";

const Home = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts);
  const genres = useSelector((state) => state.genres);
  const podcast = useSelector((state) => state.podcast);
  const genre = useSelector((state) => state.genre);

  useEffect(() => {
    const populateHome = () => {
      dispatch(getPodcasts());
      dispatch(getGenres());
    };

    populateHome();
  }, [dispatch]);

  return (
    <div className="home">
      {podcast && <Podcast podcast={podcast} />}
      {!podcast && <GenreNav genres={genres} />}
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
            {podcasts &&
              podcasts.map((pod) => <PodcastPreview key={pod.id} data={pod} />)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
