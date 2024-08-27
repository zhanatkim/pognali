import {useAppDispatch, useAppSelector} from './index';
import {
  getDuration, getEndDate,
  getEntertainment,
  getPeopleCount,
  getPlaces, getStartDate, getStep,
  getValidStatus,
} from '../store/reducers/form/selectors';
import {
  changeDuration,
  changePersonsCount,
  changeStep,
  checkFormValidStatus,
  setEntertainment,
} from '../store/reducers/form/form';
import {getCountries} from '../store/reducers/countries/selectors';
import {ChangeEvent, useEffect} from 'react';
import {sendFormDataAction} from '../store/api-actions';
import {StepsHookType} from '../types/types';

export const useFormData = (): StepsHookType => {
  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const personsCount = useAppSelector(getPeopleCount);
  const duration = useAppSelector(getDuration);

  const places = useAppSelector(getPlaces);
  const countries = useAppSelector(getCountries);
  const entertainmentData = useAppSelector(getEntertainment);
  const startDate = useAppSelector(getStartDate);
  const endDate = useAppSelector(getEndDate);
  const isValid = useAppSelector(getValidStatus);
  const placesData = places.map((el) => countries.filter((country) => el === country.id)[0]);

  useEffect(() => {
    dispatch(checkFormValidStatus());
  }, [dispatch]);

  const onChangeEntertainment = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setEntertainment({text: target.value, countryId: Number(target.id)}));
    dispatch(checkFormValidStatus());
  };

  const nextClickHandler = () => {
    dispatch(changeStep({step: step + 1}));
  };

  const prevClickHandler = () => {
    dispatch(changeStep({step: step - 1}));
  };

  const changeDurationHandler = (val:number) => {
    dispatch(changeDuration({duration: val}));
  };

  const changePersonsCountHandler = (val:number) => {
    dispatch(changePersonsCount({people: val}));
  };

  const onSubmit = () => {
    dispatch(sendFormDataAction());
  };

  return [
    step,
    personsCount,
    duration,
    startDate,
    endDate,
    isValid,
    countries,
    placesData,
    entertainmentData,
    changePersonsCountHandler,
    changeDurationHandler,
    onChangeEntertainment,
    onSubmit,
    nextClickHandler,
    prevClickHandler
  ];
};
