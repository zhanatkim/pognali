import React, {useState} from 'react';
import {IconHeart} from '../svg';

interface LikesProps {
  className: string,
  likesCount: number
}

const TravelerCardLikes: React.FC<LikesProps> = ({className, likesCount}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeUnlike = () => {
    setLiked(!liked);
  };
  return (
    <div className={`traveler-card-likes ${className}`}>
      <button className={`traveler-card-likes__btn ${liked ? 'is-liked' : ''}`} aria-label='Отметить избранным' onClick={handleLikeUnlike}>
        <IconHeart/>
      </button>
      <span className='traveler-card-likes__count'>{likesCount}</span>
    </div>
  );
};

export default TravelerCardLikes;
