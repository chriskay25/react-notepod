import EpisodePreview from "./EpisodePreview";

const Podcast = ({ podcast }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="podcast">
        <div className="podcast-title-grid">
          <div className="podcast-title-image">
            <img src={podcast.thumbnail} alt="podcast-thumbnail" />
          </div>
          <h2 className="podcast-title">{podcast.title}</h2>
          <p className="podcast-description">{podcast.description}</p>
        </div>
        <div>
          <ul>
            {podcast.episodes.map((episode) => (
              <EpisodePreview key={episode.id} episode={episode} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
