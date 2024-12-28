import React from 'react';
import spaceVideo from '../../assets/videos/space-background.mp4';
import spaceFallback from '../../assets/images/space-fallback.jpg';

export function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={spaceFallback}
      >
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-orange-900/90" />
    </div>
  );
}