import React from 'react';
import useDeviceDetect from '../../customHooks/useDeviceDetect';
import {IconFilter} from '../svg';


const CountriesSortingTitle: React.FC = () => {

  const {isMobile, isTablet} = useDeviceDetect();

  return (
    <>
      {isMobile &&
        <div className="countries-sorting__top">
          <IconFilter />
          <h2 className="countries-sorting__title">Фильтрация по странам:</h2>
        </div>}
      {!isTablet && !isMobile &&
        <div className="countries-sorting__top">
          <IconFilter />
          <h2 className="countries-sorting__title">Фильтрация по странам:</h2>
        </div>}
    </>
  );
};

export default CountriesSortingTitle;
