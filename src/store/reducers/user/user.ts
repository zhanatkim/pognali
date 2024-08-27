import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserDataType} from '../../../types/state';
import {NameSpace} from '../../../utils/const';

const initialState: UserDataType = {
  user: {
    name: '',
    tags: '',
    level: 80,
    photo: ''
  },
  token: null
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    changeTags: (state, action: PayloadAction<{tags: string;}>) => {
      state.user.tags = action.payload.tags;
    },
    setUserData: (state, action: PayloadAction<{name: string; photo: string, level: number}>) => {
      state.user.name = action.payload.name;
      state.user.photo = action.payload.photo;
      state.user.level = action.payload.level;
    },
    setUserToken: (state, action: PayloadAction<{token: string}>) => {
      state.token = action.payload.token;
    },
  },
});

export const {
  changeTags,
  setUserData,
  setUserToken
} = user.actions;
