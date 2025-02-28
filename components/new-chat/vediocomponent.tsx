import React, { useRef, useEffect, useMemo, forwardRef } from 'react';

interface VideoPlayerProps {
  pauseTimes: number[]; // Array of times (in seconds) to pause the video
}

interface VideoPlayerRef {
  resumePlayback: () => void; // Function to resume the video
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ pauseTimes }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const currentPauseIndexRef = useRef(0); // Ref to track current pause index

    // Sort pause times in ascending order and memoize for performance
    const sortedPauseTimes = useMemo(
      () => [...pauseTimes].sort((a, b) => a - b),
      [pauseTimes]
    );

    // Expose resumePlayback method to parent via ref
    React.useImperativeHandle(ref, () => ({
      resumePlayback: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      },
    }));

    // Handle pausing at specified times
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleTimeUpdate = () => {
        const currentTime = video.currentTime;
        // Check if there are more pause times and if we've reached the next one
        if (
          currentPauseIndexRef.current < sortedPauseTimes.length &&
          currentTime >= sortedPauseTimes[currentPauseIndexRef.current]
        ) {
          // Set to exact pause time and pause the video
          video.currentTime = sortedPauseTimes[currentPauseIndexRef.current];
          video.pause();
          currentPauseIndexRef.current += 1; // Move to next pause time
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      // Cleanup event listener on unmount
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }, [sortedPauseTimes]); // Only re-run if pauseTimes prop changes

    return (
      <video ref={videoRef} autoPlay loop muted width="800" className='rounded'>
        <source src="/assets/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
);

export default VideoPlayer;