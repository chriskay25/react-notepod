const EpisodeDescription = ({
  description,
  expanded,
  setExpanded,
  preview,
}) => {
  const handleClick = () => {
    if (preview) setExpanded(!expanded);
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={`episode-description ${preview ? "preview" : ""} ${
        expanded ? "expanded" : ""
      }`}
      onClick={() => handleClick()}
    />
  );
};

export default EpisodeDescription;
