import React, {ReactNode, useState} from 'react';
import Toggle from '../toggle';
import useDeviceDetect from '../../customHooks/useDeviceDetect';
import MobileCountriesList from './mobile-counties-list';
import {CountryType} from '../../types/types';
import {useAppDispatch} from '../../hooks';
import {fetchCatalogCardsAction} from '../../store/api-actions';
import {setCountriesFilter} from '../../store/reducers/catalog/catalog';

export interface CountriesListProps {
  countries: CountryType[],
  onClick: React.MouseEventHandler<HTMLButtonElement>
  btnText: ReactNode,
  btnIcon: ReactNode,
  countriesFilter: string[]
}

export const filterCountries = (item: CountryType, letter: string) => {
  if (item.name.trim()[0].toLowerCase() === letter.toLowerCase()) {
    return item;
  }
};

const CatalogCountriesList: React.FC<CountriesListProps> = ({countries, onClick, btnIcon, btnText, countriesFilter}) => {

  const dispatch = useAppDispatch();
  const {isMobile, isTablet} = useDeviceDetect();


  const sortLetters = (a: string, b: string) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  };

  const onCountryClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCountriesFilter({country: e.target.value}));
    dispatch(fetchCatalogCardsAction());
  };

  //Список Букв

  const alphabetList: string[] = [];

  countries.forEach((el) => {
    const firstLetter = el.name[0];
    if (!alphabetList.find((el) => el === firstLetter)) {
      alphabetList.push(firstLetter);
    }
  });

  // Cписок стран на тачах

  const [isToggledLetter, setIsToggledLetter] = useState('а');

  let mobileListContent = countries.filter((el) => filterCountries(el, 'а'));

  const [mobileListState, setMobileListState] = useState(mobileListContent);

  const onLetterOpenList = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const radioValue = evt.target.value.toLowerCase();
    setIsToggledLetter(radioValue);

    mobileListContent = countries.filter((el) => filterCountries(el, radioValue));
    setMobileListState(mobileListContent);
  };

  return (
    <>
      {isMobile &&
        <div className={'catalog-countries__container'}>
          <div className="catalog-countries__body">
            <ul className="catalog-countries__alphabet-list">
              {alphabetList.sort(sortLetters).map((letter) => (
                <li key={letter.toLowerCase()}>
                  <Toggle
                    type="radio"
                    appearance="label"
                    className="catalog-countries__alphabet-letter"
                    onChange={onLetterOpenList}
                    value={letter.toLowerCase()}
                    name="Буква алфавита"
                    isChecked={isToggledLetter === letter.toLowerCase()}
                  >{letter}
                  </Toggle>
                </li>
              ))}
            </ul>
            <MobileCountriesList list={mobileListState} onChange={onCountryClick} countriesFilter={countriesFilter}/>
          </div>
          <button className="catalog-countries__btn" type="button" onClick={onClick}>{btnIcon}{btnText}</button>
        </div>}
      {isTablet &&
        <div className={'catalog-countries__container'}>
          <div className="catalog-countries__body">
            <ul className="catalog-countries__alphabet-list">
              {alphabetList.sort(sortLetters).map((letter) => (
                <li key={letter.toLowerCase()}>
                  <Toggle
                    type="radio"
                    appearance="label"
                    className="catalog-countries__alphabet-letter"
                    onChange={onLetterOpenList}
                    value={letter.toLowerCase()}
                    name="Буква алфавита"
                    isChecked={isToggledLetter === letter.toLowerCase()}
                  >{letter}
                  </Toggle>
                </li>
              ))}
            </ul>
            <MobileCountriesList list={mobileListState} onChange={onCountryClick} countriesFilter={countriesFilter}/>
          </div>
          <button className="catalog-countries__btn" type="button" onClick={onClick}>{btnIcon}{btnText}</button>
        </div>}

      {!isMobile && !isTablet &&
        <div className="catalog-countries__body">
          <ul className="catalog-countries__alphabet-list">
            {alphabetList.sort(sortLetters).map((letter) => (
              <li key={letter}>
                <span className="catalog-countries__alphabet-letter">
                  {letter}
                </span>
                <ul className="catalog-countries__list">
                  {countries.filter((country) => filterCountries(country, letter)).map((country) => (
                    <li key={country.id}>
                      <Toggle
                        className="catalog-countries__toggle"
                        type={'checkbox'}
                        name={'Страна'}
                        value={country.id.toString()}
                        appearance="label"
                        isChecked={countriesFilter.some((item) => item === country.id.toString())}
                        onChange={onCountryClick}
                        sizeLabel={'--small'}
                      >{country.name}
                      </Toggle>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>}
    </>
  );
};

export default CatalogCountriesList;
