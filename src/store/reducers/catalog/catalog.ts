import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CatalogDataType} from '../../../types/state';
import {fetchCatalogCardsAction} from '../../api-actions';
import {NameSpace} from '../../../utils/const';
import {CardType} from '../../../types/types';

const initialState: CatalogDataType = {
  cards: [],
  isCardsDataLoading: false,
  hasError: false,
  pageCurrent: 1,
  pagesTotal: 1,
  regions: [],
  countries: [],
  isGettingCardsByReplacement: true,
};

export const catalog = createSlice({
  name: NameSpace.Catalog,
  initialState,
  reducers: {
    updateCards: (state, action: PayloadAction<{cards: CardType[]}>) => {
      state.cards = action.payload.cards;
    },
    updateTotalPage: (state, action: PayloadAction<{page: number}>) => {
      state.pagesTotal = action.payload.page;
    },
    changeCurrentPage: (state, action: PayloadAction<{page: number}>) => {
      state.pageCurrent = action.payload.page;
    },
    setRegionsFilter: (state, action: PayloadAction<{region: string}>) => {
      const region = action.payload.region;
      if(state.regions.some((item) => item === region)) {
        state.regions = state.regions.filter((el) => el !== region);
      } else {
        state.regions = [...state.regions, region];
      }
      state.pageCurrent = 1;
    },
    setCountriesFilter: (state, action: PayloadAction<{country: string}>) => {
      const country = action.payload.country;
      if(state.countries.some((item) => item === country)) {
        state.countries = state.countries.filter((el) => el !== country);
      } else {
        state.countries = [...state.countries, country];
      }
      state.pageCurrent = 1;
    },
    setIsGettingCardsByReplacement: (state) => {
      state.isGettingCardsByReplacement = false;
      state.pageCurrent = state.pageCurrent + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCatalogCardsAction.pending, (state) => {
        state.isCardsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCatalogCardsAction.fulfilled, (state, action) => {
        if(state.isGettingCardsByReplacement) {
          state.cards = action.payload.cards;
        } else {
          state.cards = state.cards.concat(action.payload.cards);
        }
        state.pagesTotal = action.payload.pagesTotal;
        state.isCardsDataLoading = false;
        state.isGettingCardsByReplacement = true;
      })
      .addCase(fetchCatalogCardsAction.rejected, (state) => {
        state.isCardsDataLoading = false;
        state.hasError = true;
        state.isGettingCardsByReplacement = true;
      });
  }
});

export const {
  changeCurrentPage,
  updateCards,
  updateTotalPage,
  setCountriesFilter,
  setRegionsFilter,
  setIsGettingCardsByReplacement
} = catalog.actions;
