import React from 'react';
import Toggle from '../toggle';
import {CountryType} from '../../types/types';

interface MobileCountriesListProps {
  list: CountryType[],
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  countriesFilter: string[]
}


const MobileCountriesList: React.FC<MobileCountriesListProps> = ({list, onChange, countriesFilter}) =>
  (
    <ul className="catalog-countries__list">
      {list.map((el) => (
        <li key={el.id}>
          <Toggle
            className="catalog-countries__toggle"
            type={'checkbox'}
            name={'Страна'}
            value={el.id.toString()}
            appearance="label"
            isChecked={countriesFilter.some((country) => country === el.id.toString())}
            onChange={onChange}
            sizeLabel={'--small'}
          >{el.name}
          </Toggle>
        </li>
      ))}
    </ul>
  );

export default MobileCountriesList;
