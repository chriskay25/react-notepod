const EpisodeDescription = ({ description, selected, setSelected }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={`episode-description ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    />
  );
};

export default EpisodeDescription;
