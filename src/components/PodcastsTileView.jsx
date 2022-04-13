import { useSelector } from "react-redux";
import PodcastPreview from "./PodcastPreview";
import Spinner from "./Spinner";

const PodcastsTileView = ({ podcasts, genre }) => {
  const isFetching = useSelector((state) => state.dataReducer.isFetching);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1230px",
        height: "100%",
        margin: "0 auto",
      }}
    >
      {isFetching ? (
        <Spinner />
      ) : (
        <div>
          <h3
            style={{
              color: "var(--gray-text)",
              fontWeight: 500,
              margin: "2rem 0 0 8px",
              fontSize: "2rem",
            }}
          >
            {genre.name}
          </h3>
          <ul className="podcast-preview-tiles">
            {podcasts &&
              podcasts.map((pod) => <PodcastPreview key={pod.id} data={pod} />)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PodcastsTileView;
