import {useAppSelector} from './index';
import {getCards, getCardsDataLoadingStatus, getPageCurrent, getPagesTotal} from '../store/reducers/catalog/selectors';
import {getErrorStatus} from '../store/reducers/form/selectors';
import {useEffect, useState} from 'react';
import {CardType} from '../types/types';

type CatalogCardsHookType = [CardType[], boolean, boolean, boolean, number, number];

export const useCatalogCards = (): CatalogCardsHookType => {
  const [isLoaded, setIsLoaded] = useState(false);
  const travelers = useAppSelector(getCards);
  const hasError = useAppSelector(getErrorStatus);
  const isCardsLoading = useAppSelector(getCardsDataLoadingStatus);
  const pagesTotal = useAppSelector(getPagesTotal);
  const pageCurrent = useAppSelector(getPageCurrent);

  useEffect(() => {
    if(travelers && travelers.length !== 0) {
      setIsLoaded(true);
    }
  }, [travelers]);

  return [travelers, isCardsLoading, isLoaded, hasError, pageCurrent, pagesTotal];
};
