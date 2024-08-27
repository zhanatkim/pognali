import React from 'react';

interface Props {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  altText: string;
}

const Img: React.FunctionComponent<Props> = (props) => {
  const {src, srcSet, width, height, altText} = props;

  return (
    <img
      src={src}
      srcSet={srcSet}
      width={width}
      height={height}
      alt={altText}
    />
  );
};

export default Img;
