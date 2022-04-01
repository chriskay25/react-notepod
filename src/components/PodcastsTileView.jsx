import PodcastPreview from "./PodcastPreview";

const PodcastsTileView = ({ podcasts, genre }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        height: "100%",
        margin: "0 auto",
      }}
    >
      {genre && (
        <h3
          style={{
            fontWeight: 300,
            margin: "2rem 0 2rem 0",
            textAlign: "center",
          }}
        >
          {genre.name}
        </h3>
      )}
      <ul className="home-podcast-list">
        {podcasts &&
          podcasts.map((pod) => <PodcastPreview key={pod.id} data={pod} />)}
      </ul>
    </div>
  );
};

export default PodcastsTileView;
