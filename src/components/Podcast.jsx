import React from "react";

const Podcast = ({ podcast }) => {
  return (
    <div className="podcast">
      <div
        className="podcast-title"
        style={{ display: "flex", alignItems: "baseline" }}
      >
        <img
          style={{ height: "75px" }}
          src={podcast.image}
          alt="podcast-thumbnail"
        />
        <h2 style={{ fontSize: "20px" }}>{podcast.title}</h2>
      </div>
      <p>{podcast.description}</p>
      <div>
        <h4>Episodes</h4>
        <ul>
          {podcast.episodes.map((episode) => (
            <li key={episode.id}>{episode.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Podcast;
