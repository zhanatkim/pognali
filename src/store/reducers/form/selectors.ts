import {NameSpace} from '../../../utils/const';
import {EntertainmentType, State} from '../../../types/state';

export const getTransport = (state: Pick<State, NameSpace.Form>): string[] => state[NameSpace.Form].transport;
export const getPlaces = (state: Pick<State, NameSpace.Form>): number[] => state[NameSpace.Form].places;
export const getDuration = (state: Pick<State, NameSpace.Form>): number => state[NameSpace.Form].duration;
export const getPeopleCount = (state: Pick<State, NameSpace.Form>): number => state[NameSpace.Form].people;
export const getStep = (state: Pick<State, NameSpace.Form>): number => state[NameSpace.Form].step;
export const getStartDate = (state: Pick<State, NameSpace.Form>): string => state[NameSpace.Form].dateStart;
export const getEndDate = (state: Pick<State, NameSpace.Form>): string => state[NameSpace.Form].dateEnd;
export const getErrorStatus = (state: Pick<State, NameSpace.Form>): boolean => state[NameSpace.Form].hasError;
export const getEntertainment = (state: Pick<State, NameSpace.Form>): EntertainmentType[] => state[NameSpace.Form].entertainment;
export const getValidStatus = (state: Pick<State, NameSpace.Form>): boolean => state[NameSpace.Form].isValidForm;
