import React, { useState } from "react";
import Episode from "./Episode";
import EpisodeExpanded from "./EpisodeExpanded";

const Podcast = ({ podcast }) => {
  const [episode, setEpisode] = useState(null);

  const expandEpisode = (e) => {
    setEpisode(e);
  };

  const contractEpisode = () => {
    setEpisode(null);
  };

  return (
    <div className="podcast">
      {episode && (
        <EpisodeExpanded episode={episode} contractEpisode={contractEpisode} />
      )}
      {!episode && (
        <>
          <div className="podcast-title-grid">
            <div className="podcast-title-image">
              <img src={podcast.thumbnail} alt="podcast-thumbnail" />
            </div>
            <h2 className="podcast-title">{podcast.title}</h2>
            <p className="podcast-description">{podcast.description}</p>
          </div>
          <div>
            <ul>
              {podcast.episodes.map((episode) => (
                <Episode
                  key={episode.id}
                  episode={episode}
                  expandEpisode={expandEpisode}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Podcast;
