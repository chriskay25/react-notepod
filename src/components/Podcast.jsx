import React, { useState } from "react";
import { motion } from "framer-motion";

const Podcast = ({ data }) => {
  const [selected, setSelected] = useState(false);

  return (
    <motion.div
      className="podcast-preview"
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <div className="podcast-preview-image">
        {selected && (
          <div className="podcast-preview-info">
            <h2>{data.title}</h2>
            <div>
              <span>{data.description}</span>
            </div>
          </div>
        )}
        {!selected && <img src={data.image} alt="podcast cover" />}
      </div>
    </motion.div>
  );
};

export default Podcast;
