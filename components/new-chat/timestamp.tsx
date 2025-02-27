// components/TimestampProvider.tsx
import React, { useState, useEffect } from 'react';

interface TimestampProviderProps {
  onTimestampChange: (timestamp: number) => void; // Callback to send timestamp
}

const TimestampProvider: React.FC<TimestampProviderProps> = ({ onTimestampChange }) => {
  const [timestamp, setTimestamp] = useState<number | null>(null);

  // Simulate a response from another component or API (e.g., after some event or calculation)
  useEffect(() => {
    // Example: Set a timestamp after 2 seconds (you can replace this with real logic)
    const timer = setTimeout(() => {
      setTimestamp(10); // Jump to 10 seconds (you can change this value)
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  // Send the timestamp to the parent or VideoComponent when it changes
  useEffect(() => {
    if (timestamp != null) {
      onTimestampChange(timestamp);
    }
  }, [timestamp, onTimestampChange]);

  return null; // This component doesn’t render anything visible
};

export default TimestampProvider;