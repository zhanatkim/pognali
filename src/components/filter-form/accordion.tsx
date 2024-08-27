import React, {ChangeEvent, useState} from 'react';
import AccordionItem from './accordion-item';
import Toggles from '../form-user/transport-toggles';
import GroupCheckbox from './group-checkbox';
import RangeSliderEl from './range-slider';

interface AccordionProps {
  className: string,
}

const Accordion: React.FC<AccordionProps> = ({className}) => {
  const GroupHobby = [
    {
      id: 1,
      name: 'hobby',
      label: 'Спортзал',
      value: 'Спортзал',
      isChecked: true,
    },
    {
      id: 2,
      name: 'hobby',
      label: 'Кальян',
      value: 'Кальян',
      isChecked: false,
    },
    {
      id: 3,
      name: 'hobby',
      label: 'Диван',
      value: 'Диван',
      isChecked: false,
    },
  ];

  const GroupMusic = [
    {
      id: 1,
      name: 'music',
      label: 'Тяжелый рок',
      value: 'Тяжелый рок',
      isChecked: true,
    },
    {
      id: 2,
      name: 'music',
      label: 'Русский рэп',
      value: 'Русский рэп',
      isChecked: false,
    },
    {
      id: 3,
      name: 'music',
      label: 'Евроденс',
      value: 'Евроденс',
      isChecked: false,
    },
  ];

  const GroupFood = [
    {
      id: 1,
      name: 'food',
      label: 'Мясоед',
      value: 'Мясоед',
      isChecked: true,
    },
    {
      id: 2,
      name: 'food',
      label: 'Сидит на\u00A0ПП',
      value: 'Сидит на\u00A0ПП',
      isChecked: false,
    },
    {
      id: 3,
      name: 'food',
      label: 'Веган-сыроед',
      value: 'Веган-сыроед',
      isChecked: false,
    },
  ];

  const [toggles, setToggles] = useState(['']);
  const toggleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if(toggles.some((item) => item === value)) {
      setToggles(toggles.filter((el) => el !== value));
    } else {
      const newToggles = toggles.concat([value]);
      setToggles(newToggles);
    }
  };

  const PanelData = [
    {
      id: 1,
      title: 'хобби',
      isOpen: false,
      children: <GroupCheckbox className="accordion__body-content" list={GroupHobby} />,
    },
    {
      id: 2,
      title: 'музыка',
      isOpen: true,
      children: <GroupCheckbox className="accordion__body-content" list={GroupMusic} />,
    },
    {
      id: 3,
      title: 'еда',
      isOpen: false,
      children: <GroupCheckbox className="accordion__body-content" list={GroupFood} />,
    },
    {
      id: 4,
      title: 'транспорт',
      isOpen: true,
      className: 'accordion__item--top',
      children: <Toggles className="accordion__transport" transport={toggles} onChange={toggleChangeHandler}/>,
    },
    {
      id: 5,
      title: 'левел',
      isOpen: true,
      className: 'accordion__item--top',
      children:
        <RangeSliderEl className="accordion__slider" minValue={0} maxValue={100} startValue={30}
          endValue={100}
        />,
    },
  ];

  const [openId, setId] = useState(PanelData.map((el) => el.isOpen));

  const onClickButton = (position: number) => {
    const updatedIsOpenState = openId.map((item, index) =>
      index === position ? !item : item,
    );
    setId(updatedIsOpenState);
  };

  return (
    <ul className={`${className} accordion`}>
      {PanelData.map((el, index) => (
        <AccordionItem
          key={el.id}
          title={el.title}
          dataIsOpen={openId[index]}
          className={el.className ? el.className : ''}
          onClick={() => onClickButton(index)}
        >{el.children}
        </AccordionItem>
      ))}
    </ul>
  );
};

export default Accordion;
