import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/inline/ui-kit.scss';
import logo from '../assets/img/logo.svg';

const UiKit = () => (
  <div className="uikit">
    <div className={'uikit__sections'} data-scroll-lock-fill-gap>
      <label htmlFor={'section-burger'}>
        <span>Разделы&nbsp;компонентов</span>
      </label>
      <input type={'checkbox'} className={'visually-hidden'} id={'section-burger'} defaultChecked />
      <div>
        <ul>
          <li>
            <a href={'#buttons'}>Кнопки</a>
          </li>
          <li>
            <a href={'#modals'}>Модальные окна</a>
          </li>
          <li>
            <a href={'#forms'}>Элементы форм</a>
          </li>
          <li>
            <a href={'#transport-toggles'}>Чекбоксы транспорт - transport-toggles</a>
          </li>
        </ul>
      </div>
    </div>

    <div className={'container'}>
      <Link className="uikit__header-link" to={'/'}>
        <img src={logo} className="Логотип проекта" alt="logo" />
      </Link>
      <h1 className="uikit__h1">Компоненты, используемые на проекте</h1>
      <section className="uikit__section">
        <h2 className="uikit__h2">Название компонента или группы компонентов</h2>
        <p className="uikit__text">Информация о компоненте (подсказки \ предупреждение \ важная
          информация)
        </p>
        <div className="uikit__component">
          <p className="uikit__text">Имя компонента \ модификаторы</p>
          <pre>
            <code className="language-pug">
              <p>Пример кода</p>
            </code>
          </pre>
        </div>
      </section>
      <section className="uikit__section" id="buttons">
        <h2 className="uikit__h2">Кнопки</h2>

      </section>
      <section className="uikit__section" id="forms">
        <h2 className="uikit__h2">Элементы форм</h2>

      </section>
      <section className="uikit__section" id="modals">
        <h2 className="uikit__h2">Модальные окна</h2>

      </section>
    </div>
  </div>
);

export default UiKit;
