import {NameSpace} from '../../../utils/const';
import {State} from '../../../types/state';
import {CountriesType} from '../../../types/types';

export const getCountries = (state: Pick<State, NameSpace.Countries>): CountriesType => state[NameSpace.Countries].countries;
export const getCountriesDataLoadingStatus = (state: Pick<State, NameSpace.Countries>): boolean => state[NameSpace.Countries].isCountriesDataLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Countries>): boolean => state[NameSpace.Countries].hasError;
