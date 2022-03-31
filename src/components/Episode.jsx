import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import EpisodeHeader from "./EpisodeHeader";
import EpisodeDescription from "./EpisodeDescription";
import noteIcon from "../assets/note-icon-gray.png";
import { episodeDuration } from "../utils/utils";
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
      <EpisodeHeader
        episode={episode}
        selected={selected}
        setSelected={setSelected}
      />
      <EpisodeDescription
        description={episode.description}
        selected={selected}
        setSelected={setSelected}
      />
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
