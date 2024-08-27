import React, {ChangeEvent} from 'react';
import {EntertainmentType} from './state';

// Events
export type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>
export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>
export type FocusEventHandler = React.FocusEventHandler<HTMLElement>
export type MouseEventHandler = React.MouseEventHandler<HTMLElement>
export type KeyboardEventHandler = React.KeyboardEventHandler<HTMLElement>
export type TouchEventHandler = React.TouchEvent<HTMLElement>
export type UniversalInputChangeHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

// ---------------------------------
export type Transport = {
  id: string;
  name: string;
}

export type TagType = {
  tag: string;
}

export type UserType = {
  name: string;
  tags: string;
  level: number;
  photo: string
}
export type CountryType = {
  id: number;
  name: string;
  flag: string;
  region: string;
  letter: string;
};

export type CountriesType = CountryType[];

export type CardType = {
  id: number;
  token?: string;
  name: string;
  photo: string;
  places: number[];
  tags: string;
  transport: string[];
  level: number;
}

export type CatalogType = {
  cards: CardType[];
  isCardsDataLoading: boolean;
  hasError: boolean;
  pagesTotal: number;
  token: string;
}

export type CatalogCountiesFilterType = {
  [key: string]: CountryType[];
}


// calendar types
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type StepsHookType = [
  step: number,
  personsCount: number,
  duration: number,
  startDate: string,
  endDate: string,
  isValid: boolean,
  countries: CountriesType,
  placesData: CountryType[],
  entertainmentData: EntertainmentType[],
  changePersonsCountHandler: (val: number) => void ,
  changeDurationHandler: (val: number) => void,
  onChangeEntertainment: (({target}: ChangeEvent<HTMLTextAreaElement>) => void),
  onSubmit: (() => void),
  nextClickHandler: ((evt: React.MouseEventHandler<HTMLButtonElement>) => void),
  prevClickHandler: ((evt: React.MouseEventHandler<HTMLButtonElement>) => void),
]
