"use client";

import React, { useRef, useEffect } from "react";
import VideoPlayer from "./vediocomponent";
import { useSessionContext } from "@/provider/session-context";

interface VideoPlayerRef {
  resumePlayback: () => void;
}

export default function Home() {
  const videoRef = useRef<VideoPlayerRef>(null);
  const pauseTimes = [5, 7]; // Pause at 5 seconds and 7 seconds
  const { shouldResume, setShouldResume } = useSessionContext();

  // Function to resume the video
  const handleResume = () => {
    if (videoRef.current) {
      videoRef.current.resumePlayback(); // Resume playback
      setShouldResume(false); // Reset the flag after resuming
    }
  };

  // Effect to trigger handleResume when shouldResume becomes true
  useEffect(() => {
    if (shouldResume) {
      handleResume();
    }
  }, [shouldResume]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* <h1 className="text-2xl font-bold">Video Demo</h1> */}
      <div className="rounded-lg overflow-hidden">
        <VideoPlayer ref={videoRef} pauseTimes={pauseTimes} />
      </div>
      {/* Uncomment if you still want a manual resume button */}
      {/* <button 
        onClick={handleResume}
        className="px-4 py-2"
      >
        Resume Video
      </button> */}
    </div>
  );
}