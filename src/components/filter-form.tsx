import React from 'react';

import Accordion from './filter-form/accordion';
//
// interface FilterProps {
// }

const FilterForm: React.FC = () => (
  <div className="filter-form">
    <form action="#" method="post">
      <h2 className="filter-form__title">Подберите идеального попутчика</h2>
      <Accordion className="filter-form__accordion" />
      <button className="filter-form__button" type="submit">Показать</button>
    </form>
  </div>
);

export default FilterForm;
