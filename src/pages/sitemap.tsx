import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import '../sass/inline/sitemap.scss';
import logo from '../assets/img/logo.svg';
import {AppRoute} from '../utils/const';

const Sitemap: FunctionComponent = () => (
  <div className="sitemap">
    <div className="container">
      <img src={logo} className="Логотип проекта" alt="logo"/>
      <h1>Список страниц</h1>
      <ol>
        <li>
          <Link to={AppRoute.uiKit}>
            UI-kit — ui-kit.html
          </Link>
        </li>
        <li>
          <Link to={AppRoute.root}>
            Главная — index.html
          </Link>
        </li>
        <li>
          <Link to={AppRoute.form}>
            Направления форма — form.html
          </Link>
        </li>
        <li>
          <Link to={AppRoute.catalog}>
            Каталог попутчиков — catalog.html
          </Link>
        </li>
      </ol>
    </div>
  </div>
);

Sitemap.displayName = 'Sitemap';

export default Sitemap;
