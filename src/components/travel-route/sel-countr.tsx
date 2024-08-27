import React, {useEffect, useState} from 'react';
import {CountriesType, CountryType} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getErrorStatus} from '../../store/reducers/countries/selectors';
import {deletePlace, setPlaces} from '../../store/reducers/form/form';
import {fetchCountriesAction} from '../../store/api-actions';

export interface CustomSelectProps {
  index: number;
  selectedCountry: CountryType;
  options: CountriesType,
  last: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = (
  {
    index,
    selectedCountry,
    options,
    last
  },
) => {
  const dispatch = useAppDispatch();
  const isLoadingError = useAppSelector(getErrorStatus);
  const selectedOptionInitialState = {id: 0, letter: '', name: 'Выберите страну', flag: ''};
  const [selectedOption, setSelectedOption] = useState(selectedOptionInitialState);
  const [showOptions, setShowOptions] = useState(false);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    if (isLoadingError) {
      dispatch(fetchCountriesAction());
    }
  }, [isLoadingError, dispatch]);

  useEffect(() => {
    if(selectedCountry && selectedCountry.id) {
      setSelectedOption(selectedCountry);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if(options.length !== 0) {
      const optionsLetters = Array.from(new Set(options.map((el) => el.letter)));
      setLetters(optionsLetters);
    }
  }, [options]);

  useEffect(() => {
    if(letters.length > 0 && selectedOption.letter === '') {
      setSelectedOption({...selectedOption, letter: letters[0]});
    }
  }, [letters, selectedOption]);

  const onRemoveSelect = (id: number) => {
    dispatch(deletePlace({country: id, index: index}));
  };

  const onDeleteInputValue = () => {
    setShowOptions(false);
    setSelectedOption(selectedOptionInitialState);
  };

  const handleSelect = (option: {id: number, letter: string, name: string, flag: string}) => {
    setSelectedOption(option);
    setShowOptions(false);
    dispatch(setPlaces({country: option.id, index: index}));
  };

  return (
    <div className={selectedOption.flag === '' ? 'select-countries__wrapper select-countries__wrapper--mobile' : 'select-countries__wrapper'}>
      <label className="select-countries__label">
        <input className={showOptions ? 'select-countries__input is-open' : 'select-countries__input'}
          onClick={() => setShowOptions(!showOptions)}
          value={selectedOption ? selectedOption.name : 'Выберите страну'} readOnly
        />
        {!showOptions &&
          <svg className="select-countries__icon-arrow" width="25" height="22" viewBox="0 0 25 22" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" clipPath="url(#clip0_28276_149)">
              <path
                d="M2.41098 3.48124C2.2807 3.59655 2.17735 3.73355 2.10682 3.88437C2.0363 4.0352 2 4.19689 2 4.36018C2 4.52347 2.0363 4.68516 2.10682 4.83599C2.17735 4.98681 2.2807 5.12381 2.41098 5.23913L11.7109 13.4923C11.8144 13.5843 11.9374 13.6574 12.0728 13.7072C12.2082 13.7571 12.3533 13.7827 12.4999 13.7827C12.6464 13.7827 12.7916 13.7571 12.9269 13.7072C13.0623 13.6574 13.1853 13.5843 13.2888 13.4923L22.5887 5.23913C23.1371 4.75248 23.1371 3.96788 22.5887 3.48124C22.0404 2.99459 21.4645 3.39773 20.9162 3.88437L16.0412 8.23128L12.4637 11.2936L3.46374 3.47059C3.46374 3.47059 2.94816 2.99459 2.41098 3.48124Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_28276_149">
                <rect width="22" height="24" fill="white" transform="matrix(0 -1 1 0 0.5 22)" />
              </clipPath>
            </defs>
          </svg>}
        {showOptions && last &&
          <button className="select-countries__button-input-reset" type="button" onClick={() => onDeleteInputValue()}
            aria-label="Очистить поле выбора страны"
          >
            <svg className="select-countries__icon-close" width="18" height="20" viewBox="0 0 18 20" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.875 1.75L1.125 18.25" stroke="white" strokeWidth="1.7" strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M1.125 1.75L16.875 18.25" stroke="white" strokeWidth="1.7" strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>}
      </label>

      <span
        className={selectedOption.flag !== '' ? 'select-countries__circle is-color' : 'select-countries__circle'}
      >
      </span>

      <div className={selectedOption.flag === '' ? 'select-countries__flag no-visible' : 'select-countries__flag'}>
        {selectedOption.flag !== '' ? (
          <img alt={selectedOption.name} src={selectedOption.flag} width={70} height={47} />
        ) : (
          <span></span>
        )}
      </div>

      <button className="select-countries__button-close" type="button" onClick={() => onRemoveSelect(selectedOption.id)}
        aria-label="Удалить поле выбора страны"
      >
        <svg className="select-countries__button-icon" width="18" height="20" viewBox="0 0 18 20" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.875 1.75L1.125 18.25" stroke="black" strokeWidth="1.7" strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M1.125 1.75L16.875 18.25" stroke="black" strokeWidth="1.7" strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <svg className="select-countries__arrow-mobile" width="8" height="11" viewBox="0 0 8 11" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.64645 10.3536C3.84171 10.5488 4.15829 10.5488 4.35355 10.3536L7.53553 7.17157C7.7308 6.97631 7.7308 6.65973 7.53553 6.46447C7.34027 6.2692 7.02369 6.2692 6.82843 6.46447L4 9.29289L1.17157 6.46447C0.976311 6.2692 0.659728 6.2692 0.464466 6.46447C0.269204 6.65973 0.269204 6.97631 0.464466 7.17157L3.64645 10.3536ZM3.5 0L3.5 10H4.5L4.5 0L3.5 0Z"
          fill="#CBCED9"
        />
      </svg>

      {showOptions && (
        <div className="select-countries__select">
          {isLoadingError && 'ошибка загрузки списка'}
          <ul className="select-countries__list-buttons">
            {letters.map((item, index) => (
              <li className="select-countries__item-button" key={`select-countries-${index}`}>
                <button type="button" className={`select-countries__button${selectedOption.letter === item ? ' is-active' : ''}`}
                  onClick={() => setSelectedOption({...selectedOption, letter: item})}
                  aria-label="Фильтровать название страны по первой букве"
                >
                  <span className="select-countries__button-text">{item}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="select-countries__list">
            {options
              .filter((el) => el.letter === selectedOption.letter)
              .map((option) => (
                <li key={`${option.letter}-${option.id}`} className="select-countries__item">
                  <button className="select-countries__btn" onClick={() => handleSelect(option)}
                    aria-label="Установить значение страны в поле выбора"
                  >
                    {option.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
