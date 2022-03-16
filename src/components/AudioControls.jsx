import PlayPauseButton from "./PlayPauseButton";
import JumpButton from "./JumpButton";

const AudioControls = ({ isPlaying, setIsPlaying }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="audio-controls">
        <JumpButton direction="back" />
        <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <JumpButton direction="forward" />
      </div>
    </div>
  );
};

export default AudioControls;
