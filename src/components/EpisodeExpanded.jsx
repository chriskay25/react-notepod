const EpisodeExpanded = ({ episode, contractEpisode }) => {
  return (
    <div className="expanded-episode" onClick={() => contractEpisode()}>
      <h1>{episode.title}</h1>
    </div>
  );
};

export default EpisodeExpanded;
