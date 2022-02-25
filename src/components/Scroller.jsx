import Podcast from "./Podcast";

const Scroller = ({ title, data }) => {
  return (
    <div className="scroller">
      <h3>{title}</h3>
      <div className="scroller-podcasts">
        {data && data.map((pod) => <Podcast key={pod.id} data={pod} />)}
      </div>
    </div>
  );
};

export default Scroller;
