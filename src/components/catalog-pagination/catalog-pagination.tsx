import React from 'react';
import useDeviceDetect from '../../customHooks/useDeviceDetect';
import CatalogPaginationBtnArrow from './pagination-btn-arrow';
import CatalogPaginationBtnNum from './pagination-btn-num';
import {useCatalogPagination} from '../../hooks/use-catalog-pagination';

interface CatalogPaginationProps {
  className: string,
}

const CatalogPagination: React.FC<CatalogPaginationProps> = ({className}) => {
  const [pagesTotal, pageCurrent, setCurrentPage, nextButtonClickHandler, prevButtonClickHandler] = useCatalogPagination();
  const {isMobile} = useDeviceDetect();
  const btnNums: number[] = [];
  for (let i = 1; i <= pagesTotal; i++) {
    btnNums.push(i);
  }

  return isMobile ?
    <div className={`catalog-pagination ${className}`}>
      <div className="catalog-pagination__arrows">
        <CatalogPaginationBtnArrow
          isPrev
          handlerClick={prevButtonClickHandler}
          isDisabled = {pageCurrent === 1}
        />

        <CatalogPaginationBtnArrow
          isPrev={false}
          handlerClick={nextButtonClickHandler}
          isDisabled = {pageCurrent === pagesTotal}
        />
      </div>
    </div> :
    <div className={`catalog-pagination ${className}`}>
      <div className="catalog-pagination__numbers">
        {
          btnNums.map((num) => (
            <CatalogPaginationBtnNum
              isActive={num === pageCurrent}
              key={num}
              btnNum={num}
              onNumBtnClick={() => setCurrentPage(num)}
            />
          ))
        }
      </div>
      <div className="catalog-pagination__arrows">
        <CatalogPaginationBtnArrow
          isPrev
          handlerClick={prevButtonClickHandler}
          isDisabled = {pageCurrent === 1}
        />
        <CatalogPaginationBtnArrow
          isPrev={false}
          handlerClick={nextButtonClickHandler}
          isDisabled = {pageCurrent === pagesTotal}
        />
      </div>
    </div>;
};

export default CatalogPagination;
