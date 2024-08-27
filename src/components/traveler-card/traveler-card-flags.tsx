import React from 'react';
import Img from '../utils/img';

interface FlagsProps {
  className: string,
  flags: {
    id: number,
    name: string,
    flag: string,
    region: string
    letter: string,
  }[],
}

const TravelerCardFlags: React.FC<FlagsProps> = ({className, flags}) => (
  <div className={`traveler-card-flags ${className}`}>
    <ul className='traveler-card-flags__list'>
      {flags && flags.length > 0 &&
        flags.map((item) => (
          <li className='traveler-card-flags__item' key={item.id}>
            <div className='traveler-card-flags__image'>
              <Img src={item.flag} width={35} height={24} altText={item.name}/>
            </div>
            <span className='traveler-card-flags__label'>{item.name}</span>
          </li>
        ))}
    </ul>
  </div>
);

export default TravelerCardFlags;
