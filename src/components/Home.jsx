import React, { useEffect } from "react";
import GenreNav from "./GenreNav";
import Podcast from "./Podcast";
import PodcastsTileView from "./PodcastsTileView";
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
      <GenreNav genres={genres} />
      {!podcast && <PodcastsTileView podcasts={podcasts} genre={genre} />}
    </div>
  );
};

export default Home;
