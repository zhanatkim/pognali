import {NameSpace} from '../../../utils/const';
import {State} from '../../../types/state';
import {UserType} from '../../../types/types';

export const getUserToken = (state: Pick<State, NameSpace.User>): string | null => state[NameSpace.User].token;
export const getUser = (state: Pick<State, NameSpace.User>): UserType => state[NameSpace.User].user;
