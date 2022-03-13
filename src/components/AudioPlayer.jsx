import React, { useState, useEffect } from "react";

const AudioPlayer = ({ audioUrl }) => {
  const [audio] = useState(new Audio(audioUrl));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  });

  return (
    <div className="audio-player">
      <button onClick={() => setPlaying(!playing)} style={{}}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioPlayer;
