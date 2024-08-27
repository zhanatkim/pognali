import React, {useState} from 'react';
import CatalogCountriesList from './catalog-countries-list';
import CountriesSortingTitle from './catalog-sorting-title';
import Toggle from '../toggle';
import CountriesSortingBtn from './catalog-sorting-btn';
import {IconClose, IconPoint} from '../svg';
import useDeviceDetect from '../../customHooks/useDeviceDetect';
import AnimateHeight from 'react-animate-height';
import {useAppDispatch} from '../../hooks';
import {useCountries} from '../../hooks/use-countries';
import {setRegionsFilter} from '../../store/reducers/catalog/catalog';
import {fetchCatalogCardsAction} from '../../store/api-actions';

const CatalogCountries = () => {
  const dispatch = useAppDispatch();
  const [regionsFilter, countriesFilter, countriesFilteredByRegion] = useCountries();
  const {isMobile, isTablet} = useDeviceDetect();

  const togglesList = [
    {
      id: 1,
      value: 'europe',
      label: 'Европа',
      name: 'continent',
      isChecked: true,
    },
    {
      id: 2,
      value: 'asia',
      label: 'Азия',
      name: 'continent',
      isChecked: false,
    },
    {
      id: 3,
      value: 'americas',
      label: 'америка',
      name: 'continent',
      isChecked: false,
    },
    {
      id: 4,
      value: 'oceania',
      label: 'острова',
      name: 'continent',
      isChecked: false,
    },
  ];

  const handleOnChange = (regionName: string) => {
    dispatch(setRegionsFilter({region: regionName}));
    dispatch(fetchCatalogCardsAction());
  };


  //Кнопка открытия списка

  // const {toggleScroll} = useBodyScrollLock();

  let countriesListContent = null;

  const [isToggled, setIsToggled] = useState(false);

  const btnText = isToggled ?
    'Свернуть' :
    (
      <>{(isMobile || isTablet) && 'Показать все'}
        {(!isMobile && !isTablet) && 'Развернуть'}
      </>
    );
  const btnIcon = (
    <>
      {isToggled && <IconClose />}
      {(isMobile || isTablet) && !isToggled && <IconPoint />}
    </>);
  const countriesPosition = (isMobile || isTablet) && isToggled ? 'is-active' : '';

  const [height, setHeight] = useState<number | 'auto'>(0);

  const onBtnOpenList = () => {
    setIsToggled(!isToggled);
    setHeight(height === 0 ? 'auto' : 0);
    // toggleScroll();
  };

  if (isToggled) {
    if (isMobile) {
      countriesListContent = (
        <>
          <form action="#">
            <ul className="countries-sorting__list">
              {togglesList.map((el) => (
                <li key={el.id}>
                  <Toggle
                    className="countries-sorting__toggle"
                    type={'checkbox'}
                    name={el.name}
                    value={el.value}
                    appearance="label"
                    isChecked={regionsFilter.some((item) => item === el.value)}
                    onChange={() => handleOnChange(el.value)}
                  >{el.label}
                  </Toggle>
                </li>
              ))}
            </ul>
          </form>
          <CatalogCountriesList
            countries={countriesFilteredByRegion}
            onClick={onBtnOpenList}
            btnIcon={btnIcon}
            btnText={btnText}
            countriesFilter={countriesFilter}
          />
        </>);
    } else {
      countriesListContent = (
        <CatalogCountriesList
          countries={countriesFilteredByRegion}
          onClick={onBtnOpenList}
          btnIcon={btnIcon}
          btnText={btnText}
          countriesFilter={countriesFilter}
        />);
    }
  }


  return (
    <>
      {isMobile &&
        <div className={`catalog-countries ${countriesPosition}`} id="catalog-countries">
          <div className="container">
            <div className="catalog-countries__sorting countries-sorting">
              <CountriesSortingTitle />
              <CountriesSortingBtn
                aria-expanded={height !== 0}
                aria-controls="countries-list"
                onClick={onBtnOpenList}
                btnIcon={btnIcon}
                btnText={btnText}
              />
            </div>
            <AnimateHeight
              id="countries-list"
              duration={600}
              height={height}
            >
              {countriesListContent}
            </AnimateHeight>
          </div>
        </div>}
      {isTablet &&
        <div className={`catalog-countries ${countriesPosition}`} id="catalog-countries">
          <div className="container">
            <div className="catalog-countries__sorting countries-sorting">
              <CountriesSortingTitle />
              <form action="#">
                <ul className="countries-sorting__list">
                  {togglesList.map((el) => (
                    <li key={el.id}>
                      <Toggle
                        className="countries-sorting__toggle"
                        type={'checkbox'}
                        name={el.name}
                        value={el.value}
                        appearance="label"
                        isChecked={regionsFilter.some((item) => item === el.value)}
                        onChange={() => handleOnChange(el.value)}
                      >{el.label}
                      </Toggle>
                    </li>
                  ))}
                </ul>
              </form>
              <CountriesSortingBtn
                aria-expanded={height !== 0}
                aria-controls="countries-list"
                onClick={onBtnOpenList}
                btnIcon={btnIcon}
                btnText={btnText}
              />
            </div>
            <AnimateHeight
              id="countries-list"
              duration={600}
              height={height}
            >
              {countriesListContent}
            </AnimateHeight>
          </div>
        </div>}
      {(!isMobile && !isTablet) &&
        <div className={`catalog-countries ${countriesPosition}`} id="catalog-countries">
          <div className="container">
            <div className="catalog-countries__sorting countries-sorting">
              <CountriesSortingTitle />
              <form action="#">
                <ul className="countries-sorting__list">
                  {togglesList.map((el) => (
                    <li key={el.id}>
                      <Toggle
                        className="countries-sorting__toggle"
                        type={'checkbox'}
                        name={el.name}
                        value={el.value}
                        appearance="label"
                        isChecked={regionsFilter.some((item) => item === el.value)}
                        onChange={() => handleOnChange(el.value)}
                      >{el.label}
                      </Toggle>
                    </li>
                  ))}
                </ul>
              </form>
              <CountriesSortingBtn
                aria-expanded={height !== 0}
                aria-controls="countries-list"
                onClick={onBtnOpenList}
                btnIcon={btnIcon}
                btnText={btnText}
              />
            </div>
            <div className={'catalog-countries__container'}>
              <AnimateHeight
                id="countries-list"
                duration={600}
                height={height}
              >
                {countriesListContent}
              </AnimateHeight>
            </div>
            <button className="catalog-countries__btn" type="button"
              onClick={onBtnOpenList}
            >{btnIcon}{btnText}
            </button>
          </div>
        </div>}
    </>
  );
};

export default CatalogCountries;
