import AudioPlayer from "./AudioPlayer";
import { episodeDuration, episodeDate } from "../utils/utils";
import calendar from "../assets/blue-calendar.png";
import clock from "../assets/blue-clock.png";
import close from "../assets/close-icon.png";

const EpisodeExpanded = ({ episode, contractEpisode }) => {
  return (
    <div className="episode-expanded">
      <button
        className="expand-contract-bttn"
        onClick={() => contractEpisode()}
      >
        <img src={close} alt="close-icon" className="note-icon" />
      </button>
      <h2 className="episode-title">{episode.title}</h2>
      <div className="episode-icons-container">
        <img className="episode-icon" src={calendar} alt="calendar" />
        <span>{episodeDate(episode.pub_date_ms)}</span>
        <img className="episode-icon" src={clock} alt="clock" />
        <span>{episodeDuration(episode.audio_length_sec)}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: episode.description }}
        className="episode-description selected"
      />
      <AudioPlayer
        audioUrl={episode.audio}
        audioDuration={episodeDuration(episode.audio_length_sec)}
      />
    </div>
  );
};

export default EpisodeExpanded;
