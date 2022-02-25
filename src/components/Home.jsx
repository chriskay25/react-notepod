import React, { useState, useEffect } from "react";
// import Podcast from "./Podcast";
import Scroller from "./Scroller";

const Home = () => {
  const [popularData, setPopularData] = useState(null);
  const [curatedData, setCuratedData] = useState(null);

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

  const curated = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/search?type=curated"
      );
      const data = await response.json();
      setCuratedData(data.curated_lists.slice(0, 3));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const populateHome = async () => {
      await popular();
      await curated();
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
      <Scroller title="Popular" data={popularData} />
      {curatedData &&
        curatedData.map((data) => (
          <Scroller title={data.title} data={data.podcasts} />
        ))}
    </div>
  );
};

export default Home;
