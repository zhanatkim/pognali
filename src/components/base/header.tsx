import React from 'react';
import {useRef, useEffect, useState} from 'react';

import {Link, useLocation, Location} from 'react-router-dom';
import HeaderLogo from '../svg/header-logo';
import IconEmail from '../svg/icon-email';
import IconPhone from '../svg/icon-phone';
import {
  IconTelegram,
  IconVk,
  IconYoutube,
} from '../svg';

// interface HeaderProps {
// }

const Header: React.FC = () => {
  const location: Location = useLocation();
  const mainPage = '/main';
  const [menuActive, setMenuActive] = useState(false);

  type RectResult = {
    height: number;
  } | null;

  const refComponent = useRef(null);
  useEffect(() => {
    const getRect = (element: HTMLElement | null): RectResult | null => {
      if (!element) {
        return null;
      }
      return element.getBoundingClientRect();
    };

    const setPaddingTop = () => {
      const heightHeader = getRect(refComponent.current)?.height;
      window.document.body.style.paddingTop = `${heightHeader}px`;
      const wrapper: HTMLElement | null = document.querySelector('.wrapper');
      if (wrapper) {
        wrapper.style.minHeight = `calc(100 * var(--vh, 1vh) - ${heightHeader}px)`;
      }
      window.document.body.style.height = `calc(100% - ${heightHeader}px)`;
      window.document.body.style.minHeight = `calc(100% - ${heightHeader}px)`;
      // console.log(getRect(refComponent.current)?.height);
    };
    setPaddingTop();
    window.addEventListener('resize', setPaddingTop);
  }, [refComponent]);

  const items = [
    {
      name: 'О\u00A0сервисе',
      href: '/#',
    },
    {
      name: 'Направления',
      href: '/form',
    },
    {
      name: 'Попутчики',
      href: '/catalog',
    },
  ];

  return (
    <header ref={refComponent} className="header">
      <div className="container">
        <div className={menuActive ? 'header__wrapper is-active' : 'header__wrapper'}>
          {location.pathname === mainPage ? (
            <span className="header__logo-link">
              <HeaderLogo className="header__logo header__logo" />
            </span>
          ) : (
            <Link className="header__logo-link" to={'/main'} aria-label='На Главную - Логотип компании'>
              <HeaderLogo className="header__logo header__logo" />
            </Link>
          )}

          <div className="header__nav-menu">
            <ul className="header__list">
              {items.map((item, index) => (
                <li className="header__item" key={index}>
                  {location.pathname === item.href ? (
                    <span className="header__link">
                      {item.name}
                    </span>
                  ) : (
                    <Link className="header__link" to={item.href}>
                      <span data-hover={item.name}>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <ul className="header__buttons">
              <li>
                <Link className="header__button" to={'tel:+78005558628'} aria-label='Позвонить нам'>
                  <IconPhone className="header__button-logo header__button-logo" />
                  <span className="header__button-text">8&nbsp;800&nbsp;555-86-28</span>
                </Link>
              </li>
              <li>
                <Link className="header__button" to={'mailto:mail@htmlacademy.ru'} aria-label='Написать нам'>
                  <IconEmail className="header__button-logo header__button-logo" />
                  <span className="header__button-text">mail@htmlacademy.ru</span>
                </Link>
              </li>
            </ul>

            <div className="header__social social">
              <ul className="social__list">
                <li className="social__item">
                  <Link to="/" className="social__link social__link--telegram" aria-label='Telegram'>
                    <IconTelegram />
                  </Link>
                </li>
                <li className="social__item">
                  <Link to="/" className="social__link social__link--vk" aria-label='В контакте'>
                    <IconVk />
                  </Link>
                </li>
                <li className="social__item">
                  <Link to="/" className="social__link social__link--youtube" aria-label='Youtube'>
                    <IconYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button className='header__burger' type="button" aria-label="Переключатель отображения меню" onClick={() => setMenuActive(!menuActive)}></button>

        </div>
      </div>
    </header>
  );
};

export default Header;
