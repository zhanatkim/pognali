import React from 'react';

interface Props {
  name: string,
  width: number,
  height: number
}

const Icon: React.FC<Props> = (props) => {
  const {name, width, height} = props;
  return (
    <svg
      width={width}
      height={height}
      aria-hidden
    >
      {/* <use xlinkHref={`src/assets/img/sprite + ${name}`} /> */}
      <use xlinkHref={`src/assets/img/sprite.svg#${name}`}/>
    </svg>
  );
};

export default Icon;
