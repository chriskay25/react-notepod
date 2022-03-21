import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import calendar from "../assets/blue-calendar.png";
import clock from "../assets/blue-clock.png";
import noteIcon from "../assets/note-icon-gray.png";
const Episode = ({ episode, expandEpisode }) => {
  const [selected, setSelected] = useState(null);
  const pad2Digits = (digits) => digits.toString().padStart(2, "0"); // Puts 0's before single dgts

  const episodeDuration = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds = length % 60;
    return `${minutes}:${pad2Digits(seconds)}`;
  };

  const episodeDate = (timestamp) => {
    let newDate = new Date(timestamp);
    return newDate.toLocaleDateString();
  };

  return (
    <li
      className={`episode ${selected ? "selected" : ""}`}
      style={{ height: selected ? "100%" : "170px" }}
    >
      <button
        style={{
          width: "fit-content",
          height: "auto",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          top: "5px",
          right: "5px",
        }}
        onClick={() => expandEpisode(episode)}
      >
        <img src={noteIcon} alt="note-icon" className="note-icon" />
      </button>
      <div
        className={`episode-top ${selected ? "selected" : ""}`}
        onClick={() => setSelected(!selected)}
      >
        <h4 style={{ fontSize: "1.4rem", fontWeight: "400" }}>
          {episode.title}
        </h4>
        <div
          style={{
            display: "flex",
            margin: ".3rem 0 .5rem 0",
            fontStyle: "italic",
          }}
        >
          <img className="episode-icon" src={calendar} alt="calendar" />
          <span>{episodeDate(episode.pub_date_ms)}</span>
          <img className="episode-icon" src={clock} alt="clock" />
          <span>{episodeDuration(episode.audio_length_sec)}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: episode.description }}
          className={`episode-description ${selected ? "selected" : ""}`}
        />
      </div>
      {selected && (
        <AudioPlayer
          audioUrl={episode.audio}
          audioDuration={episodeDuration(episode.audio_length_sec)}
        />
      )}
    </li>
  );
};

export default Episode;
