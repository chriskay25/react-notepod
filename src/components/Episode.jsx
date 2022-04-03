import { useDispatch } from "react-redux";
import { episodeDuration } from "../utils/utils";
import EpisodeHeader from "./EpisodeHeader";
import EpisodeDescription from "./EpisodeDescription";
import AudioPlayer from "./AudioPlayer";
import { selectEpisode } from "../actions/episodes";
import close from "../assets/close-icon.png";
const Episode = ({ episode }) => {
  const dispatch = useDispatch();

  return (
    <div className="episode">
      <button
        className="expand-contract-bttn"
        onClick={() => dispatch(selectEpisode(null))}
      >
        <img src={close} alt="close-icon" className="note-icon" />
      </button>
      <EpisodeHeader episode={episode} />
      <EpisodeDescription description={episode.description} />
      <AudioPlayer
        audioUrl={episode.audio}
        audioDuration={episodeDuration(episode.audio_length_sec)}
        audioLengthSec={episode.audio_length_sec}
      />
    </div>
  );
};

export default Episode;
