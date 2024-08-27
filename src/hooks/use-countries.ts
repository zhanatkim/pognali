import {useAppSelector} from './index';
import {getCountries} from '../store/reducers/countries/selectors';
import {getCountriesFilter, getRegionsFilter} from '../store/reducers/catalog/selectors';
import {CountryType} from '../types/types';
import {useEffect, useState} from 'react';

type ResultCountriesData = [string[], string[], CountryType[], CountryType[]];

export const useCountries = (): ResultCountriesData => {
  const regionsFilter = useAppSelector(getRegionsFilter);
  const countriesList = useAppSelector(getCountries);
  const countriesFilter = useAppSelector(getCountriesFilter);
  const [countriesFilteredByRegion, setCountriesFilteredByRegion] = useState(countriesList);

  useEffect(() => {
    if(regionsFilter.length === 0) {
      setCountriesFilteredByRegion(countriesList);
    } else {
      const newCountriesList = countriesList.filter((country) => regionsFilter.some((region) => region === country.region));
      setCountriesFilteredByRegion(newCountriesList);
    }

  }, [regionsFilter, countriesList]);

  return [regionsFilter, countriesFilter, countriesFilteredByRegion, countriesList];
};
