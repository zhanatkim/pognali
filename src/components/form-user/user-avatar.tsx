/* eslint-disable react/no-unknown-property */
import React from 'react';


interface UserProps {
  className: string;
  avatar: string;
  name: string;
  // fetchPriority: string | undefined;
}

const UserAvatar: React.FC<UserProps> = ({className, avatar, name}) => (
  <div className={`user-avatar ${className}`}>
    <div className="user-avatar__image">
      <img
        fetchPriority='high'
        src={avatar}
        srcSet={''}
        width={220}
        height={237}
        alt={`фотография ${name}`}
      />
    </div>
  </div>
);

export default UserAvatar;
