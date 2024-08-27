import React from 'react';

interface UserProps {
  className: string;
  grade: number;
}

const UserGrade: React.FC<UserProps> = ({className, grade}) => {
  const customStyle = {'--progress': `${grade}%`} as React.CSSProperties;
  return (
    <div className={`user-grade ${className}`} style={customStyle}>
      <span className="user-grade__count">{grade}</span>
      <span className="user-grade__unit">level</span>
    </div>
  );
};

export default UserGrade;
