import React from 'react';

export function AudioWave() {
  return (
    <div className="audio-wave-container absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      <div className="wave-group">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="wave"
            style={{
              animationDelay: `${i * 0.1}s`,
              left: `${i * 5}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}