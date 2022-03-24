import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getPodcast } from "../actions/podcasts";

const PodcastPreview = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <motion.li className="podcast-preview">
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
