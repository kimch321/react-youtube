import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi();
  const {isLoading, error, data: videos} = useQuery(['related', id], () => youtube.relatedVideos(id));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😅</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          { videos.map(video => <VideoCard key={video.id} video={video} />)}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;