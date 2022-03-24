import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import calendar from "../assets/blue-calendar.png";
import clock from "../assets/blue-clock.png";
import noteIcon from "../assets/note-icon-gray.png";
import { episodeDuration, episodeDate } from "../utils/utils";
const Episode = ({ episode, expandEpisode }) => {
  const [selected, setSelected] = useState(null);

  return (
    <li
      className={`episode ${selected ? "selected" : ""}`}
      style={{ height: selected ? "100%" : "170px" }}
    >
      <button
        className="expand-contract-bttn"
        onClick={() => expandEpisode(episode)}
      >
        <img src={noteIcon} alt="note-icon" className="note-icon" />
      </button>
      <div
        className={`episode-top ${selected ? "selected" : ""}`}
        onClick={() => setSelected(!selected)}
      >
        <h4 className="episode-title">{episode.title}</h4>
        <div className="episode-icons-container">
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
          audioLengthSec={episode.audio_length_sec}
        />
      )}
    </li>
  );
};

export default Episode;
