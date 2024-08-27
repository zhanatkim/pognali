import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {CountriesType, CatalogType} from '../types/types';
import {APIRoute, AppRoute} from '../utils/const';
import {saveToken} from '../services/token';
import {updateCards, updateTotalPage} from './reducers/catalog/catalog';
import {redirectToRoute} from './action';
import {setUserToken} from './reducers/user/user';

export const fetchCountriesAction = createAsyncThunk<CountriesType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCountries',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CountriesType>(APIRoute.Countries);
    return data;
  },
);

export const fetchCatalogCardsAction = createAsyncThunk<CatalogType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCatalogCards',
  async (_arg, {extra: api, getState}) => {
    const countiesFilter = getState().CATALOG.countries;
    const regionsFilter = getState().CATALOG.regions;
    const pageCurrent = getState().CATALOG.pageCurrent;
    const countries = countiesFilter.length ? `&countryId=${countiesFilter.toString()}` : '';
    const regionStr = regionsFilter.length ? `&region=${regionsFilter.toString()}` : '';
    const pageStr = pageCurrent ? `?page=${pageCurrent}` : '';
    const {data} = await api.get<CatalogType>(`${APIRoute.Cards}${pageStr}${regionStr}${countries}`);
    return data;
  },
);

export const sendFormDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'form/sendFormData',
  async (_arg, {dispatch, extra: api, getState}) => {
    const {data: {cards, pagesTotal, token}} = await api.post<CatalogType>(APIRoute.CardsAdd, {
      places: getState().FORM.places,
      transport: getState().FORM.transport,
      people: getState().FORM.people,
      duration: getState().FORM.duration,
      dateStart: getState().FORM.dateStart,
      dateEnd: getState().FORM.dateEnd,
      entertainment: getState().FORM.entertainment,
      name: getState().USER.user.name,
      photo: getState().USER.user.photo,
      level: getState().USER.user.level,
      tags: getState().USER.user.tags,
    });
    saveToken(token);
    dispatch(setUserToken({token}));
    dispatch(updateCards({cards}));
    dispatch(updateTotalPage({page: pagesTotal}));
    dispatch(redirectToRoute(AppRoute.catalog));
  },
);
