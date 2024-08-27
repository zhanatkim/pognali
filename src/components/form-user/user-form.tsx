import React from 'react';

import UserGrade from './user-grade';
import UserAvatar from './user-avatar';
import TagsInput from './tags-input';
import Toggles from './transport-toggles';
import AvatarBtn from './user-avatar-btn';
import {useUserData} from '../../hooks/use-user-data';

interface HeroProps {
  className: string;
}

const UserForm: React.FC<HeroProps> = ({className}) => {
  const [transport, name, tags, level, photo, tagsChangeHandler, transportChangeHandler] = useUserData();
  return (
    <div className={`user-form ${className}`}>
      <div className="container">
        <div className="user-form__wrapper">
          <h1 className="user-form__title title-h1">Направления</h1>
          <UserGrade className="user-form__user-grade" grade={level}/>
          <UserAvatar className="user-form__user-avatar" avatar={photo} name={name} />
          <TagsInput className="user-form__tags-input" tags={tags} onChange={tagsChangeHandler}/>
          <Toggles className="user-form__toggles" transport={transport} onChange={transportChangeHandler}/>
          <AvatarBtn className="user-form__avatar-btn" />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
