import { motion } from "framer-motion";

const svgVariants = {
  initial: {},
  pause: {},
  play: {},
};

const lineTransition = {
  duration: 0.6,
};

const lineVariant1 = {
  initial: { x1: -20, y1: 20, x2: -20, y2: 60 },
  pause: {
    x1: 0,
    y1: 4,
    x2: 0,
    y2: 36,
    strokeWidth: "5px",
    stroke: "white",
  },
  play: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 40,
    stroke: "white",
  },
  transition: { lineTransition },
};

const lineVariant2 = {
  initial: { x1: 44, y1: 20, x2: 44, y2: 60 },
  pause: {
    x1: 24,
    y1: 4,
    x2: 24,
    y2: 36,
    strokeWidth: "5px",
    stroke: "white",
  },
  play: {
    x1: 0,
    y1: 0,
    x2: 32,
    y2: 20,
    stroke: "white",
  },
  transition: { lineTransition },
};

const lineVariant3 = {
  initial: { opacity: 0, x1: 44, y1: 20, x2: 44, y2: 60 },
  pause: {
    opacity: 0,
    stroke: "var(--gray-text)",
    x1: 24,
    y1: 4,
    x2: 24,
    y2: 36,
  },
  play: {
    opacity: 1,
    x1: 0,
    y1: 40,
    x2: 32,
    y2: 20,
    stroke: "white",
  },
  transition: { lineTransition },
};

const PlayPauseButton = ({ isPlaying, setIsPlaying }) => {
  return (
    <motion.svg
      className="pause-play-button"
      height="40px"
      width="32px"
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
