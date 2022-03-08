import React from "react";
import { motion } from "framer-motion";

const Podcast = ({ data }) => {
  return (
    <motion.li className="podcast-preview">
      <div className="podcast-preview-image">
        <img src={data.image} alt="podcast cover" />
      </div>
    </motion.li>
  );
};

export default Podcast;
