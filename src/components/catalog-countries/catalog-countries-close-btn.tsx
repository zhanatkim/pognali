import React, { ButtonHTMLAttributes } from 'react';
import {IconClose} from '../svg';

interface CloseBtnProps extends ButtonHTMLAttributes<HTMLElement> {
  btnText: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CountriesCloseBtn: React.FC<CloseBtnProps> = ({onClick, btnText, ...props}) => (
  <button className='catalog-countries__btn' type='button' onClick={onClick} {...props}>
    <IconClose/>
    {btnText}
  </button>
);

export default CountriesCloseBtn;
