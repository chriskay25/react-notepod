import Podcast from "./Podcast";

const Scroller = ({ title, data }) => {
  return (
    <div className="scroller-container">
      <h3
        style={{ fontSize: "1.8rem", fontWeight: 300, marginBottom: ".2rem" }}
      >
        {title}
      </h3>
      <div className="scroller">
        <div className="scroller-podcasts">
          {data && data.map((pod) => <Podcast key={pod.id} data={pod} />)}
        </div>
      </div>
    </div>
  );
};

export default Scroller;
