import React from 'react';
import useDeviceDetect from '../../customHooks/useDeviceDetect';

interface GradeProps {
  className: string,
  grade: number,
}

const TravelerCardGrade: React.FC<GradeProps> = ({className, grade}) => {
  const modifiedGrade = `${grade}%`;
  const customStyle = {'--progress': modifiedGrade} as React.CSSProperties;

  const {isMobile} = useDeviceDetect();
  return isMobile ?
    <div className={`traveler-card-grade ${className}`} style={customStyle}>
      <span className='traveler-card-grade__count'>{grade}</span>
    </div> :
    <div className={`traveler-card-grade ${className}`} style={customStyle}>
      <span className='traveler-card-grade__count'>{grade}</span>
      <span className='traveler-card-grade__unit'>level</span>
    </div>;
};

export default TravelerCardGrade;
