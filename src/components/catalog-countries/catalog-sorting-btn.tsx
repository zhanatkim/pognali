import React, {ReactNode} from 'react';
import useDeviceDetect from '../../customHooks/useDeviceDetect';

interface BtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  btnText: ReactNode,
  btnIcon: ReactNode
}

const CountriesSortingBtn: React.FC<BtnProps> = ({onClick, btnText, btnIcon}) => {

  const {isMobile, isTablet} = useDeviceDetect();

  return (
    <>
      {isMobile &&
        <button className="countries-sorting__btn" aria-label='Показать всё' onClick={onClick}>
          <span className="countries-sorting__btn-icon">{btnIcon}</span>
        </button>}
      {isTablet &&
        <button className="countries-sorting__btn" onClick={onClick}>
          <span className="countries-sorting__btn-text">{btnText}</span>
          <span className="countries-sorting__btn-icon">{btnIcon}</span>
        </button>}
      {!isTablet && !isMobile &&
        <button className="countries-sorting__btn" onClick={onClick}>
          <span className="countries-sorting__btn-text">{btnText}</span>
          <span className="countries-sorting__btn-icon">{btnIcon}</span>
        </button>}
    </>
  );
};

export default CountriesSortingBtn;
