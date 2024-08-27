import {FunctionComponent} from 'react';
import {Link, useLocation, Location} from 'react-router-dom';
import {
  FooterLogo,
  IconTelegram,
  IconVk,
  IconYoutube, TextGo,
} from '../svg';
import {AppRoute} from '../../utils/const';

const Footer: FunctionComponent = () => {
  const location: Location = useLocation();

  return (
    <footer className="footer">
      <div className={`${location.pathname === AppRoute.form ? 'footer__bg' : ''}`}>
        <div className="footer__wrapper">
          <div className="container">
            <div className="footer__row">
              <span className="footer__text-go"><TextGo/></span>
              {location.pathname === AppRoute.main ? (
                <span className="footer__logo">
                  <FooterLogo/>
                </span>
              ) : (
                <Link to="/" className="footer__logo" aria-label='На Главную - Логотип компании'>
                  <FooterLogo/>
                </Link>
              )}
              <div className="footer__social social">
                <ul className="social__list">
                  <li className="social__item">
                    <Link to="/" className="social__link social__link--telegram" aria-label='Телеграм'>
                      <IconTelegram/>
                    </Link>
                  </li>
                  <li className="social__item">
                    <Link to="/" className="social__link social__link--vk" aria-label='В контакте'>
                      <IconVk/>
                    </Link>
                  </li>
                  <li className="social__item">
                    <Link to="/" className="social__link social__link--youtube" aria-label='Youtube'>
                      <IconYoutube/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
