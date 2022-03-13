import React from "react";
import Episode from "./Episode";

const Podcast = ({ podcast }) => {
  return (
    <div className="podcast">
      <div className="podcast-title">
        <img
          style={{ height: "50px" }}
          src={podcast.image}
          alt="podcast-thumbnail"
        />
        <h2 style={{ fontSize: "2.5rem" }}>{podcast.title}</h2>
      </div>
      <p style={{ margin: "15px 0" }}>{podcast.description}</p>
      <div>
        <h3>EPISODES</h3>
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
