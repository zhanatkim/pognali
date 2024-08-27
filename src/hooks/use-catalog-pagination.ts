import {useAppDispatch, useAppSelector} from './index';
import {getPageCurrent, getPagesTotal} from '../store/reducers/catalog/selectors';
import {changeCurrentPage, setIsGettingCardsByReplacement} from '../store/reducers/catalog/catalog';
import {fetchCatalogCardsAction} from '../store/api-actions';
import React from 'react';

type PaginationType = [
  pagesTotal: number,
  pageCurrent: number,
  setCurrentPage: (page: number) => void,
  prevButtonClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  nextButtonClickHandler:(event: React.MouseEvent<HTMLButtonElement>) => void,
  clickShowMoreButton?: () => void,
];

export const useCatalogPagination = (): PaginationType => {
  const dispatch = useAppDispatch();
  const pagesTotal = useAppSelector(getPagesTotal);
  const pageCurrent = useAppSelector(getPageCurrent);

  const clickShowMoreButton = () => {
    dispatch(setIsGettingCardsByReplacement());
    dispatch(fetchCatalogCardsAction());
  };

  const setCurrentPage = (page:number) => {
    dispatch(changeCurrentPage({page: page }));
    dispatch(fetchCatalogCardsAction());
  };

  const prevButtonClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const newPageValue = pageCurrent - 1;
    dispatch(changeCurrentPage({page: newPageValue}));
    dispatch(fetchCatalogCardsAction());
  };

  const nextButtonClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const newPageValue = pageCurrent + 1;
    dispatch(changeCurrentPage({page: newPageValue}));
    dispatch(fetchCatalogCardsAction());
  };


  return [pagesTotal, pageCurrent, setCurrentPage, nextButtonClickHandler, prevButtonClickHandler, clickShowMoreButton];
};
