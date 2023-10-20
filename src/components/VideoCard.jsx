import React from 'react';

function VideoCard({ video }) {
  return (
    <div>
      {video.snippet.title}
    </div>
  );
}

export default VideoCard;