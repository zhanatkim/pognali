import React, {ChangeEvent} from 'react';
import Toggle from '../toggle';
import {IconPlane, IconBus, IconBicycle, IconOnfoot} from '../svg';

interface TogglesProps {
  className: string;
  transport: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Toggles: React.FC<TogglesProps> = ({className, transport, onChange}) => {
  const togglesData = [
    {
      id: 1,
      svg: <IconPlane />,
      name: 'транспорт',
      value: 'plane',
      isChecked: false,

    },
    {
      id: 2,
      svg: <IconBus />,
      name: 'транспорт',
      value: 'bus',
      isChecked: false,

    },
    {
      id: 3,
      svg: <IconBicycle />,
      name: 'транспорт',
      value: 'bycicle',
      isChecked: false,
    },
    {
      id: 4,
      svg: <IconOnfoot />,
      name: 'транспорт',
      value: 'walking',
      isChecked: false,
    },
  ];

  return (
    <div className={`transport-toggles ${className}`}>
      {togglesData.map((el) => (
        <Toggle key={el.id}
          type={'checkbox'}
          name={el.name}
          aria-label={el.value}
          isChecked={transport.some((item) => item === el.value)}
          value={el.value}
          onChange={onChange}
        >{el.svg}
        </Toggle>
      ))}
      <span className="transport-toggles__label">Транспорт</span>
    </div>
  );
};

export default Toggles;
