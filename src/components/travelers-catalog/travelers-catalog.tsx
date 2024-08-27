import React from 'react';
import CatalogCountries from '../catalog-countries/catalog-countries';
import TravelerCard from '../traveler-card/traveler-card';
import CatalogPagination from '../catalog-pagination/catalog-pagination';
import CatalogShowMoreBtn from './catalog-showmore-btn';
import FilterForm from '../filter-form';
import {useCatalogCards} from '../../hooks/use-catalog-cards';
import {CardType} from '../../types/types';
import {useAppSelector} from '../../hooks';
import {getUserToken} from '../../store/reducers/user/selector';

const TravelersCatalog = () => {
  const [travelers, isCardsLoading, isLoaded, hasError, pageCurrent, pagesTotal] = useCatalogCards();
  const userToken = useAppSelector(getUserToken);

  return (
    <div className="travelers-catalog">
      <div className="container">
        <h1 className="travelers-catalog__title title-h1">Попутчики</h1>
      </div>
      <CatalogCountries/>
      <div className="container container--catalog">
        <div className="travelers-catalog__wrapper">
          <div className="travelers-catalog__inner">
            {isCardsLoading && !isLoaded &&
              'Загрузка ...'}
            {hasError &&
              'Ошибка получения данных ...'}
            {isLoaded &&
              <ul className="travelers-catalog__list">
                {travelers.map((card: CardType) => (
                  <li className="travelers-catalog__item" key={card.id}>
                    <TravelerCard cardData={card} userToken={userToken !== null ? userToken : ''}/>
                  </li>
                ))}
              </ul>}
            {(pageCurrent !== pagesTotal) &&
              <CatalogShowMoreBtn />}
            {(pagesTotal > 1) &&
              <CatalogPagination
                className={'travelers-catalog__pagination'}
              />}
          </div>
          <FilterForm />
        </div>
      </div>
    </div>
  );
};

export default TravelersCatalog;
