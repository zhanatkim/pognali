import React from 'react';

interface CatalogPaginationBtnNumProps {
  isActive: boolean,
  btnNum: number,
  onNumBtnClick: React.MouseEventHandler<HTMLButtonElement>
}

const CatalogPaginationBtnNum: React.FC<CatalogPaginationBtnNumProps> = ({isActive, btnNum, onNumBtnClick}) =>
  (
    <button onClick={onNumBtnClick} aria-label={`На страницу ${btnNum}`} value={btnNum}
      className={`catalog-pagination__btn catalog-pagination__btn--num${isActive ? ' active' : ''}`}
    >
      {btnNum}
    </button>
  );

export default CatalogPaginationBtnNum;
