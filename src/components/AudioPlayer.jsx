import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import { motion } from "framer-motion";

const AudioPlayer = ({ audioUrl, audioDuration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(audioUrl));
  const intervalRef = useRef();

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setProgress(0);
      } else {
        setProgress(audioRef.current.currentTime.toFixed(0));
      }
    }, [1000]);
  };

  const onScrub = (val) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = val;
    setProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const skip = (val) => {
    const t = audioRef.current.currentTime;
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = t + val;
    setProgress(audioRef.current.currentTime.toFixed(0));
    if (isPlaying) {
      startTimer();
    }
  };

  const formatTime = (t) => {
    const pad2Digits = (digits) => digits.toString().padStart(2, "0");
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes}:${pad2Digits(seconds)}`;
  };

  useEffect(() => {
    let currentAudioRef = audioRef.current;
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }

    return () => {
      currentAudioRef.pause();
      clearTimeout(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <motion.div
      className="audio-player"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AudioControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skip={skip}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0 5px 0",
          color: "white",
          position: "relative",
          fontSize: "1.1rem",
        }}
      >
        <span>{formatTime(progress)}</span>
        <span>{audioDuration}</span>
      </div>
      <input
        type="range"
        step="1"
        min="0"
        value={progress}
        max={
          audioRef.current.duration ? audioRef.current.duration : audioDuration
        }
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
      />
    </motion.div>
  );
};

export default AudioPlayer;
