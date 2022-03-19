import React from "react";
import Episode from "./Episode";

const Podcast = ({ podcast }) => {
  return (
    <div className="podcast">
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
            <Episode key={episode.id} episode={episode} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Podcast;
