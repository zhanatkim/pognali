import {store} from '../store/store';
import {CountriesType} from './types';
import {UserType} from './types';
import {CardType} from './types';

export type CountriesDataType = {
  countries: CountriesType;
  isCountriesDataLoading: boolean;
  hasError: boolean;
};

export type UserDataType = {
  user: UserType;
  token: string | null
}

export type CatalogDataType = {
  cards: CardType[];
  isCardsDataLoading: boolean;
  hasError: boolean;
  pageCurrent: number;
  pagesTotal: number;
  regions: string[];
  countries: string[];
  isGettingCardsByReplacement: boolean;
}

export type EntertainmentType = {
  countryId: number;
  text: string;
}

export type FormDataTypes = {
  duration: number;
  withChildren: boolean;
  dateStart: string;
  dateEnd: string;
  hasError: boolean;
  step: number;
  places: number[];
  transport: string[];
  people: number;
  entertainment: EntertainmentType[];
  isValidForm: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
