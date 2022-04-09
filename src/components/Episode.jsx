import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { episodeDuration } from "../utils/utils";
import EpisodeHeader from "./EpisodeHeader";
import AudioPlayer from "./AudioPlayer";
import EpisodeCenter from "./EpisodeCenter";
import { selectEpisode } from "../actions/episodes";
import close from "../assets/close-icon.png";
const Episode = ({ episode }) => {
  const episodeRef = useRef();
  const dispatch = useDispatch();

  return (
    <div ref={episodeRef} className="episode">
      <button
        className="expand-contract-bttn"
        onClick={() => dispatch(selectEpisode(null))}
      >
        <img src={close} alt="close-icon" className="note-icon" />
      </button>
      <EpisodeHeader episode={episode} noteMode />
      <EpisodeCenter ref={episodeRef} description={episode.description} />
      <AudioPlayer
        audioUrl={episode.audio}
        audioDuration={episodeDuration(episode.audio_length_sec)}
        audioLengthSec={episode.audio_length_sec}
      />
    </div>
  );
};

export default Episode;
