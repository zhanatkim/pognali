import React from 'react';
import {IconPagArrow} from '../svg';

export interface CatalogPaginationBtnArrowProps {
  isPrev: boolean,
  handlerClick: React.MouseEventHandler<HTMLButtonElement>,
  isDisabled: boolean
}

const CatalogPaginationBtnArrow: React.FC<CatalogPaginationBtnArrowProps> = ({isPrev, handlerClick, isDisabled}) => {
  const position = isPrev ? '--prev' : '--next';
  const ariaLabel = isPrev ? 'Назад' : 'Вперёд';

  return (
    <button onClick={handlerClick} aria-label={`${ariaLabel}`}
      className={`catalog-pagination__btn catalog-pagination__btn${position}`}
      disabled={isDisabled}
    >
      <IconPagArrow />
    </button>
  );
};

export default CatalogPaginationBtnArrow;
