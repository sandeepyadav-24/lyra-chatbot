// app/page.tsx
import React, { useState } from 'react';
import VideoComponent from './vediocomponent';
import TimestampProvider from './timestamp';

export default function Home() {
  const [targetTimestamp, setTargetTimestamp] = useState<number | undefined>(undefined); // Changed from null to undefined

  const handleTimestampChange = (timestamp: number) => {
    setTargetTimestamp(timestamp);
  };

  const updateVideoTimestamp = (newTimestamp: number) => {
    setTargetTimestamp(newTimestamp);

    console.log(newTimestamp);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Video Player Demo</h1>

      <VideoComponent
        src="/assets/vid.mp4"
        targetTimestamp={targetTimestamp}
      />

      <TimestampProvider onTimestampChange={handleTimestampChange} />

      <div className="mt-4 space-x-4">
        <button
          onClick={() => updateVideoTimestamp(5)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Jump to 5s
        </button>
        <button
          onClick={() => updateVideoTimestamp(8)

          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Jump to 15s
        </button>
        <button
          onClick={() => updateVideoTimestamp(30)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Jump to 30s
        </button>
      </div>
    </div>
  );
}