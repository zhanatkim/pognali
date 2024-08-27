import React from 'react';

// import { useState } from 'react';

interface AvaBtnProps {
  className: string;
}

const AvatarBtn: React.FC<AvaBtnProps> = ({className}) => (
  <button type="button" className={`${className}`}>
    <span>сменить фото</span>
  </button>
);

export default AvatarBtn;
