import {CountryType} from '../types/types';
import {useAppSelector} from './index';
import {getCountries} from '../store/reducers/countries/selectors';

export const usePlaceData = (places : number[]): CountryType[] => {
  const countriesList:CountryType[] = useAppSelector(getCountries);
  const newPlacesData: CountryType[] = [];
  if (places.length !== 0) {
    places.map((place) => {
      newPlacesData.push(countriesList.filter((country) => country.id === place)[0]);
    });
  }
  return newPlacesData;
};
