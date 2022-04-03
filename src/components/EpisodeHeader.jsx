import { episodeDuration, episodeDate } from "../utils/utils";
import calendar from "../assets/blue-calendar.png";
import clock from "../assets/blue-clock.png";

const EpisodeHeader = ({ episode, expanded, setExpanded, preview }) => {
  const handleClick = () => {
    if (preview) setExpanded(!expanded);
  };
  return (
    <header
      className={`episode-header ${preview ? "preview" : ""} ${
        expanded ? "expanded" : ""
      }`}
      onClick={() => handleClick()}
    >
      <h4 className="episode-title">{episode.title}</h4>
      <div className="episode-icons-container">
        <img className="episode-icon" src={calendar} alt="calendar" />
        <span>{episodeDate(episode.pub_date_ms)}</span>
        <img className="episode-icon" src={clock} alt="clock" />
        <span>{episodeDuration(episode.audio_length_sec)}</span>
      </div>
    </header>
  );
};

export default EpisodeHeader;
