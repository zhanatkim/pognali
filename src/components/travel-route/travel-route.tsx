import React, {useEffect, useState} from 'react';
import {FunctionComponent} from 'react';
import {IconPlay} from '../svg';
import CustomSelect from './sel-countr';
import {CountriesType} from '../../types/types';

interface TravelRouteProps {
  places: CountriesType;
  countries: CountriesType,
  prevClickHandler: CallableFunction,
  nextClickHandler: CallableFunction,
}

const TravelRoute: FunctionComponent<TravelRouteProps> = ({places, countries, prevClickHandler, nextClickHandler}) => {
  const [arr, setArr] = useState(['']);
  const value = '';

  useEffect(() => {
    if(places.length > 0){
      const newArr = places.map(() => '');
      setArr(newArr);
    }
  }, [places]);

  const result = arr.map((element, index) =>
    (
      <CustomSelect key={index}
        index={index}
        selectedCountry={places[index]}
        options={countries}
        last = {index === places.length - 1}
      />
    ),
  );

  return (
    <li className="order-form__item">
      <div className="order-form__item-wrap">
        <div className="order-form__header">
          <div className="order-form__description">
            <h3 className="title-h3 order-form__header-title">Шаг&nbsp;2. Маршрут</h3>
            <p className="order-form__header-text">Укажите страны, которые вы&nbsp;хотели&nbsp;бы посетить.<br />Это
              может быть одна или сразу несколько.
            </p>
          </div>
          <ul className="order-form__way-list">
            <li className="order-form__way-item order-form__way-item--inactive">
              <span className="order-form__way-item-text">даты</span>
            </li>
            <li className="order-form__way-item">
              <span className="order-form__way-item-text">маршрут</span>
            </li>
            <li className="order-form__way-item order-form__way-item--inactive">
              <span className="order-form__way-item-text">развлечения</span>
            </li>
          </ul>
        </div>

        <div className="order-form__content-wrapper select-countries">
          <div className="select-countries__wrapper-block">
            {result}
          </div>
          {result.length < 4 &&
            <div className="select-countries__button-wrapper">
              <button className="select-countries__add-button" type="button"
                onClick={() => setArr([...arr, value])}
              >Добавить страну
              </button>
              <span className="select-countries__circle select-countries__circle--add-button"></span>
            </div>}
        </div>

        <div className="order-form__row order-form__row--action">
          <button type="button" className="button" onClick={() => nextClickHandler()}>
            Следующий шаг
            <IconPlay />
          </button>
          <button type="button" className="button button--prev" onClick={() => prevClickHandler()}>
            На шаг назад
            <IconPlay />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TravelRoute;
