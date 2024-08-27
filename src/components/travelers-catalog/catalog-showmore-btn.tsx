import React from 'react';
import {IconPlus} from '../svg';
import {fetchCatalogCardsAction} from '../../store/api-actions';
import {setIsGettingCardsByReplacement} from '../../store/reducers/catalog/catalog';
import {useAppDispatch} from '../../hooks';

const CatalogShowMoreBtn = () => {
  const dispatch = useAppDispatch();

  const onShowMoreClick = () => {
    dispatch(setIsGettingCardsByReplacement());
    dispatch(fetchCatalogCardsAction());
  };
  return (
    <button className="travelers-catalog__showmore-btn" onClick={onShowMoreClick}>
      <IconPlus />
      <span>Показать ещё</span>
    </button>);
};

export default CatalogShowMoreBtn;
