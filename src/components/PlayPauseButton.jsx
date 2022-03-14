import { motion } from "framer-motion";

const svgVariants = {
  initial: {},
  pause: {},
  play: {},
};

const lineVariant1 = {
  initial: { x1: -10, y1: 10, x2: -10, y2: 30 },
  pause: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 16,
    strokeWidth: "5px",
    stroke: "white",
  },
  play: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 20,
    stroke: "white",
  },
};

const lineVariant2 = {
  initial: { x1: 22, y1: 10, x2: 22, y2: 30 },
  pause: {
    x1: 12,
    y1: 0,
    x2: 12,
    y2: 20,
    strokeWidth: "5px",
    stroke: "white",
  },
  play: {
    x1: 0,
    y1: 0,
    x2: 12,
    y2: 10,
    stroke: "white",
  },
};

const lineVariant3 = {
  initial: { opacity: 0, x1: 22, y1: 10, x2: 22, y2: 30 },
  pause: { opacity: 0 },
  play: {
    opacity: 1,
    x1: 0,
    y1: 20,
    x2: 12,
    y2: 10,
    stroke: "white",
  },
};

const PlayPauseButton = ({ isPlaying, setIsPlaying }) => {
  return (
    <motion.svg
      className="pause-play-button"
      height="20px"
      width="20px"
      variants={svgVariants}
      initial="initial"
      animate={isPlaying ? "pause" : "play"}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <motion.line variants={lineVariant1} stroke="black" strokeWidth="4px" />
      <motion.line variants={lineVariant2} stroke="black" strokeWidth="4px" />
      <motion.line variants={lineVariant3} stroke="black" strokeWidth="4px" />
    </motion.svg>
  );
};

export default PlayPauseButton;
