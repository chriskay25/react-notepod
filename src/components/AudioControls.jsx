import PlayPauseButton from "./PlayPauseButton";
import JumpButton from "./JumpButton";

const AudioControls = ({ isPlaying, setIsPlaying, skip }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="audio-controls">
        <JumpButton direction="back" skip={skip} />
        <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <JumpButton direction="forward" skip={skip} />
      </div>
    </div>
  );
};

export default AudioControls;
