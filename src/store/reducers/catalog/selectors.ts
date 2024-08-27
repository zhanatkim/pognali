import {NameSpace} from '../../../utils/const';
import {State} from '../../../types/state';
import {CardType} from '../../../types/types';

export const getCards = (state: Pick<State, NameSpace.Catalog>): CardType[] => state[NameSpace.Catalog].cards;
export const getCardsDataLoadingStatus = (state: Pick<State, NameSpace.Catalog>): boolean => state[NameSpace.Catalog].isCardsDataLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Catalog>): boolean => state[NameSpace.Catalog].hasError;
export const getPagesTotal = (state: Pick<State, NameSpace.Catalog>): number => state[NameSpace.Catalog].pagesTotal;
export const getPageCurrent = (state: Pick<State, NameSpace.Catalog>): number => state[NameSpace.Catalog].pageCurrent;
export const getRegionsFilter = (state: Pick<State, NameSpace.Catalog>): string[] => state[NameSpace.Catalog].regions;
export const getCountriesFilter = (state: Pick<State, NameSpace.Catalog>): string[] => state[NameSpace.Catalog].countries;
