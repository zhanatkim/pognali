import React from 'react';
import {IconBicycle, IconBus, IconOnfoot, IconPlane} from '../svg';

export interface TravelerCardTransportProps {
  transport: string[]
}

const TravelerCardTransport: React.FC<TravelerCardTransportProps> = ({transport}) => {

  const transportIcons = [
    {
      iconName: 'plane',
      icon: <IconPlane/>
    },
    {
      iconName: 'bus',
      icon: <IconBus/>
    },
    {
      iconName: 'bycicle',
      icon: <IconBicycle/>
    },
    {
      iconName: 'walking',
      icon: <IconOnfoot/>
    }
  ];

  const setColor = (iconName: string) => transport.find((el) => el === iconName) ? 'dark' : 'light';

  return (
    <div className='traveler-card__transport traveler-card-transport'>
      <ul className='traveler-card-transport__list'>
        {transportIcons.map((el, index) => (
          <li key={index}
            className={`traveler-card-transport__item traveler-card-transport__item--${setColor(el.iconName)}`}
          >
            {el.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelerCardTransport;
