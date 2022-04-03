import React, { useEffect } from "react";
import NavContainer from "./NavContainer";
import PodcastsTileView from "./PodcastsTileView";
import Podcast from "./Podcast";
import Episode from "./Episode";
import { useDispatch, useSelector } from "react-redux";
import { getPodcasts } from "../actions/podcasts";
import { getGenres } from "../actions/genres";

const Home = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcastReducer.podcasts);
  const podcast = useSelector((state) => state.podcastReducer.podcast);
  const episode = useSelector((state) => state.episodeReducer.episode);
  const genres = useSelector((state) => state.genreReducer.genres);
  const genre = useSelector((state) => state.genreReducer.genre);

  useEffect(() => {
    const populateHome = () => {
      dispatch(getPodcasts());
      dispatch(getGenres());
    };

    populateHome();
  }, [dispatch]);

  return (
    <div className="home">
      <NavContainer genres={genres} />
      {podcast && !episode && <Podcast podcast={podcast} />}
      {podcast && episode && <Episode episode={episode} />}
      {!podcast && <PodcastsTileView podcasts={podcasts} genre={genre} />}
    </div>
  );
};

export default Home;
