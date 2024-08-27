import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormDataTypes} from '../../../types/state';
import {sendFormDataAction} from '../../api-actions';
import {minTravelDuration, NameSpace, minCompanions} from '../../../utils/const';

const initialState: FormDataTypes = {
  places: [],
  transport: [],
  people: minCompanions,
  duration: minTravelDuration,
  withChildren: false,
  dateStart: '',
  dateEnd: '',
  entertainment: [],
  hasError: false,
  step: 1,
  isValidForm: false
};

export const form = createSlice({
  name: NameSpace.Form,
  initialState,
  reducers: {
    checkFormValidStatus: (state) => {
      if (state.dateStart.length && state.dateEnd.length && state.transport.length && state.places.length && (state.places.length === state.entertainment.length)){
        state.isValidForm = true;
      }
    },
    changeDateStart: (state, action: PayloadAction<{dateStart: string}>) => {
      state.dateStart = action.payload.dateStart;
    },
    changeDateEnd: (state, action: PayloadAction<{dateEnd: string}>) => {
      state.dateEnd = action.payload.dateEnd;
    },
    changePersonsCount: (state, action: PayloadAction<{people: number;}>) => {
      state.people = action.payload.people;
    },
    changeDuration: (state, action: PayloadAction<{duration: number;}>) => {
      state.duration = action.payload.duration;
    },
    changeStep: (state, action: PayloadAction<{step: number;}>) => {
      state.step = action.payload.step;
    },
    setTransport: (state, action: PayloadAction<{transport: string[];}>) => {
      state.transport = action.payload.transport;
    },
    deletePlace: (state, action: PayloadAction<{country: number; index: number;}>) => {
      const i = action.payload.index;
      state.places = state.places.filter((item, index) => (index !== i));
    },
    setPlaces: (state, action: PayloadAction<{country: number; index: number;}>) => {
      const country = action.payload.country;
      const index = action.payload.index;
      state.places[index] = country;
    },
    setEntertainment: (state, action: PayloadAction<{countryId: number; text: string;}>) => {
      if(state.entertainment.length !== 0) {
        let inState = false;
        state.entertainment.map((item) => {
          if(item.countryId === action.payload.countryId) {
            item.text = action.payload.text;
            inState = true;
          }
        });
        if(!inState) {
          state.entertainment.push({
            countryId: action.payload.countryId,
            text: action.payload.text
          });
        }
      } else {
        state.entertainment.push({
          countryId: action.payload.countryId,
          text: action.payload.text
        });
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendFormDataAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(sendFormDataAction.fulfilled, (state) => {
        state.hasError = false;
        Object.assign(state,initialState);
      })
      .addCase(sendFormDataAction.rejected, (state) => {
        state.hasError = true;
      });
  }
});

export const {
  checkFormValidStatus,
  setTransport,
  setPlaces,
  deletePlace,
  setEntertainment,
  changeDuration,
  changeStep,
  changeDateEnd,
  changePersonsCount,
  changeDateStart
} = form.actions;

