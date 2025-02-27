// components/VideoComponent.tsx
import React, { useRef, useEffect } from 'react';

interface VideoComponentProps {
  src: string; // Video file path (e.g., '/assets/vid.mp4')
  targetTimestamp?: number; // Timestamp in seconds to jump to and stop at (optional)
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, targetTimestamp }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Jump to the target timestamp if provided
    if (targetTimestamp != null) {
      video.currentTime = targetTimestamp;
      video.pause(); // Stop the video at the timestamp
    }

    // Optional: Add an event listener to stop the video if it reaches the target timestamp while playing
    const handleTimeUpdate = () => {
      if (targetTimestamp != null && video.currentTime >= targetTimestamp) {
        video.pause();
        video.currentTime = targetTimestamp; // Ensure it stays at the exact timestamp
      }
    };

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    // Clean up the event listener
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [src, targetTimestamp]);

  return (
    <div className="max-w-2xl mx-auto">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded shadow-lg"
        muted // Mute by default (optional, for autoplay in some browsers)
        onError={(e) => console.error('Video loading error:', e)}
      />
    </div>
  );
};

export default VideoComponent;