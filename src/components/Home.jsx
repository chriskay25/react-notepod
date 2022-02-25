import React, { useState, useEffect } from "react";
import Podcast from "./Podcast";

const Home = () => {
  const [popularData, setPopularData] = useState(null);

  const popular = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/search?type=popular"
      );
      const data = await response.json();
      setPopularData(data.podcasts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const populateHome = async () => {
      await popular();
    };

    populateHome();
  }, []);

  return (
    <div
      style={{
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="scroller">
        <h3>Popular</h3>
        <div className="scroller-podcasts">
          {popularData &&
            popularData.map((pod) => <Podcast key={pod.id} data={pod} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
