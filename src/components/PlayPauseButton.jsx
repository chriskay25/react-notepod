import { motion } from "framer-motion";

const svgVariants = {
  initial: {},
  pause: {},
  play: {},
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
};

const lineVariant3 = {
  initial: { opacity: 0, x1: 44, y1: 20, x2: 44, y2: 60 },
  pause: { opacity: 0 },
  play: {
    opacity: 1,
    x1: 0,
    y1: 40,
    x2: 32,
    y2: 20,
    stroke: "white",
  },
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

// const svgVariants = {
//   initial: {},
//   pause: {},
//   play: {},
// };

// const lineVariant1 = {
//   initial: { x1: -10, y1: 10, x2: -10, y2: 30 },
//   pause: {
//     x1: 0,
//     y1: 2,
//     x2: 0,
//     y2: 18,
//     strokeWidth: "5px",
//     stroke: "white",
//   },
//   play: {
//     x1: 0,
//     y1: 0,
//     x2: 0,
//     y2: 20,
//     stroke: "white",
//   },
// };

// const lineVariant2 = {
//   initial: { x1: 22, y1: 10, x2: 22, y2: 30 },
//   pause: {
//     x1: 12,
//     y1: 2,
//     x2: 12,
//     y2: 18,
//     strokeWidth: "5px",
//     stroke: "white",
//   },
//   play: {
//     x1: 0,
//     y1: 0,
//     x2: 16,
//     y2: 10,
//     stroke: "white",
//   },
// };

// const lineVariant3 = {
//   initial: { opacity: 0, x1: 22, y1: 10, x2: 22, y2: 30 },
//   pause: { opacity: 0 },
//   play: {
//     opacity: 1,
//     x1: 0,
//     y1: 20,
//     x2: 16,
//     y2: 10,
//     stroke: "white",
//   },
// };

// const PlayPauseButton = ({ isPlaying, setIsPlaying }) => {
//   return (
//     <motion.svg
//       className="pause-play-button"
//       height="20px"
//       width="16px"
//       variants={svgVariants}
//       initial="initial"
//       animate={isPlaying ? "pause" : "play"}
//       onClick={() => setIsPlaying(!isPlaying)}
//     >
//       <motion.line variants={lineVariant1} stroke="black" strokeWidth="4px" />
//       <motion.line variants={lineVariant2} stroke="black" strokeWidth="4px" />
//       <motion.line variants={lineVariant3} stroke="black" strokeWidth="4px" />
//     </motion.svg>
//   );
// };

// export default PlayPauseButton;
