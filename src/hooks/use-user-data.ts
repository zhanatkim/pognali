import {useAppDispatch, useAppSelector} from './index';
import {getTransport} from '../store/reducers/form/selectors';
import {getUser, getUserToken} from '../store/reducers/user/selector';
import React, {ChangeEvent, useEffect} from 'react';
import {changeTags, setUserData, setUserToken} from '../store/reducers/user/user';
import {getToken} from '../services/token';
import {userFirstNameList, userLastNameList, randomUserPhoto} from '../utils/const';
import {checkFormValidStatus, setTransport} from '../store/reducers/form/form';

type UserDataType = [
  transport: string[],
  name: string,
  tags: string,
  userLevel: number,
  userPhoto: string,
  tagsChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  transportChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
]

export const useUserData = ():UserDataType => {
  const dispatch = useAppDispatch();
  const transport = useAppSelector(getTransport);
  const {name, tags, level, photo} = useAppSelector(getUser);
  const userToken = useAppSelector(getUserToken);
  const userLevel = level;
  const userPhoto = photo;


  useEffect(()=>{
    if (name === ''){
      const randomUser = Math.floor(Math.random() * 20);
      const gender = randomUser % 2 ? 'female' : 'male';
      const userPhoto = (gender === 'male' ? `${randomUserPhoto.male}${randomUser}.jpg` : `${randomUserPhoto.female}${randomUser}.jpg`);
      const randomUserName = `${userFirstNameList[gender][randomUser]} ${userLastNameList[gender][randomUser]}`;
      const userLevel = (Math.floor(Math.random() * randomUser * 5));
      dispatch(setUserData({name: randomUserName, level: userLevel, photo: userPhoto}));
    }
  }, [name, dispatch]);

  useEffect(() => {
    if(userToken === '') {
      const token = getToken();
      if (token) {
        dispatch(setUserToken({token}));
      }
    }
  }, [userToken, dispatch]);

  const tagsChangeHandler = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = target.value;
    dispatch(changeTags({tags: newValue}));
    dispatch(checkFormValidStatus());
  };

  const transportChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    let newValue: string[] = [];
    if(transport.some((item) => item === target.value)) {
      newValue = transport.filter((el) => el !== target.value);
    } else {
      newValue = [...transport, target.value];
    }
    dispatch(setTransport({transport: newValue}));
    dispatch(checkFormValidStatus());
  };

  return [transport, name, tags, userLevel, userPhoto, tagsChangeHandler, transportChangeHandler];
};
