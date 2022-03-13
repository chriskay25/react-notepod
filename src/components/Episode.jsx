import React from "react";
import AudioPlayer from "./AudioPlayer";

const Episode = ({ episode }) => {
  const pad2Digits = (digits) => digits.toString().padStart(2, "0");

  const episodeLength = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds = length % 60;
    return `${minutes}:${pad2Digits(seconds)}`;
  };

  const episodeDate = (timestamp) => {
    let newDate = new Date(timestamp);
    return newDate.toLocaleDateString();
  };

  return (
    <li className="episode">
      <h4>{episode.title}</h4>
      <div style={{ display: "flex", marginBottom: ".5rem" }}>
        <span>{episodeDate(episode.pub_date_ms)}</span>
        <span style={{ marginLeft: "1rem" }}>
          {episodeLength(episode.audio_length_sec)}
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: episode.description }}
        className="episode-description"
      />
      <AudioPlayer audioUrl={episode.audio} />
    </li>
  );
};

export default Episode;
