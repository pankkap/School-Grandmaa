import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export const BackgroundMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Set default volume to 35%
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
    }

    // Try auto-play on first user interaction (browser security policy fallback)
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Auto-play blocked, waiting for user toggle click.");
          });
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.error("Playback failed", err);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/background_music.mp3?v=2"
        loop
      />

      <div className="music-player-floating-container">
        <motion.button
          onClick={togglePlay}
          className="music-toggle-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          title={isPlaying ? "Pause Background Music" : "Play Background Music"}
        >
          {isPlaying && (
            <span className="pulse-ring" />
          )}
          {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        </motion.button>
      </div>
    </>
  );
};
