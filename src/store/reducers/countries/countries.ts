import {createSlice} from '@reduxjs/toolkit';
import {CountriesDataType} from '../../../types/state';
import {fetchCountriesAction} from '../../api-actions';
import {NameSpace} from '../../../utils/const';

const initialState: CountriesDataType = {
  countries: [],
  isCountriesDataLoading: false,
  hasError: false,
};

export const countries = createSlice({
  name: NameSpace.Countries,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountriesAction.pending, (state) => {
        state.isCountriesDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCountriesAction.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isCountriesDataLoading = false;
      })
      .addCase(fetchCountriesAction.rejected, (state) => {
        state.isCountriesDataLoading = false;
        state.hasError = true;
      });
  }
});
