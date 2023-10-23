import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

function VideoCard({ video, type }) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    // videos/watch/${video.id} 이렇게 적으면 현재 경로에 해당 주소를 추가하는 방식으로 작동한다.
    // <li onClick={() => {navigate(`videos/watch/${video.id}`, {state: {video}})}}> 
    // 최상위 경로에서 시작하는 것을 원한다면 /를 붙여주길 바란다.
    <li className={ isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
          navigate(`/videos/watch/${video.id}`, {state: {video}})
        }}>
        <img
          className={isList ? 'w-60 mr-2' : 'w-full'}
          src={thumbnails.medium.url}
          alt={title} />
        <div>
            <p className='font-semibold my-2 line-clamp-2'>{title}</p>
            <p className='text-sm opacity-80'>{channelTitle}</p>
            <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
        </div>
    </li>
  );
}

export default VideoCard;