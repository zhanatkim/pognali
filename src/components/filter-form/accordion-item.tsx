import React, {
  ReactNode,
} from 'react';

import {ReactComponent as ArrowIcon} from '../../assets/img/icons/arrow-icon.svg';

interface AccordionItemProps {
  title: string,
  dataIsOpen: boolean
  children: ReactNode,
  className?: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const AccordionItem: React.FC<AccordionItemProps> = ({dataIsOpen, children, title, className, onClick}) =>
  (
    <li className={`accordion__item ${className}`}>
      <button type="button" className="accordion__button" onClick={onClick}>
        {title}
        <span className="accordion__colon">:</span>
        <ArrowIcon className={`accordion__arrow ${dataIsOpen ? 'active' : ''}`} />
      </button>
      <fieldset className={dataIsOpen ? 'accordion__collapse open' : 'accordion__collapse'}>
        <div className="accordion__body">
          {children}
        </div>
      </fieldset>
    </li>
  );

export default AccordionItem;
