import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import {countries} from './countries/countries';
import {form} from './form/form';
import {user} from './user/user';
import {catalog} from './catalog/catalog';

export const rootReducer = combineReducers({
  [NameSpace.Countries]: countries.reducer,
  [NameSpace.Form]: form.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Catalog]: catalog.reducer,
});

