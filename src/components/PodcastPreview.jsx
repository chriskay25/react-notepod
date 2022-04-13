import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getPodcast } from "../actions/podcasts";

const PodcastPreview = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <motion.li
      className="podcast-preview"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.3, type: "spring", damping: 30 },
      }}
    >
      <div
        className="podcast-preview-image"
        onClick={() => dispatch(getPodcast(data.id))}
      >
        <img src={data.image} alt="podcast cover" />
      </div>
    </motion.li>
  );
};

export default PodcastPreview;
