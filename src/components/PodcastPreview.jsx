import React from "react";
import { motion } from "framer-motion";

const PodcastPreview = ({ data }) => {
  return (
    <motion.li className="podcast-preview">
      <div className="podcast-preview-image">
        <img src={data.image} alt="podcast cover" />
      </div>
    </motion.li>
  );
};

export default PodcastPreview;
