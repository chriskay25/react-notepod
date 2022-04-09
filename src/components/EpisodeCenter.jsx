import React, { useState, useEffect } from "react";
import EpisodeDescription from "./EpisodeDescription";
import Notepad from "./Notepad";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const EpisodeCenter = React.forwardRef((props, ref) => {
  const [width, setWidth] = useState(100);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const handleDragEnd = async (e, info) => {
    const offset = info.offset.x;
    if (offset < -100) {
      controls.start({ x: -width, transition: { duration: 0.2 } });
    }
    if (offset > 100) {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.2 } });
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((e) => {
      setWidth(e[0].contentBoxSize[0].inlineSize);
    });
    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, [ref]);

  return (
    <motion.div
      className="episode-center"
      ref={ref}
      drag="x"
      dragConstraints={{ right: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      dragElastic={0.5}
      whileHover={{ cursor: "pointer" }}
      whileTap={{ cursor: "grabbing" }}
      whileDrag={{ cursor: "grabbing" }}
      onDragEnd={(e, info) => handleDragEnd(e, info)}
      style={{ x }}
      animate={controls}
      layout
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "95%",
            background: "var(--gray-text)",
            color: "white",
            borderRadius: "5px",
            padding: "20px 20px",
            overflow: "hidden",
          }}
        >
          <EpisodeDescription description={props.description} noteMode />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width - 5,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "95%",
            width: "100%",
            background: "var(--gray-text)",
            color: "white",
            borderRadius: "5px",
            padding: "20px 20px",
            overflow: "hidden",
          }}
        >
          <Notepad />
        </div>
      </div>
    </motion.div>
  );
});

export default EpisodeCenter;
