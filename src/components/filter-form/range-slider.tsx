import React, {useState} from 'react';
import {RangeSlider, InputGroup, InputNumber} from 'rsuite';

import 'rsuite/RangeSlider/styles/index.css';

interface RangeSliderElProps {
  className: string,
  minValue: number,
  maxValue: number,
  startValue: number,
  endValue: number,
}

const RangeSliderEl: React.FC<RangeSliderElProps> = ({className, minValue, maxValue, startValue, endValue}) => {
  const [value, setValue] = useState<[number, number]>([startValue, endValue]);

  return (
    <div className={`${className} slider`}>
      <RangeSlider
        className="slider__bar"
        progress
        value={value}
        onChange={(value: [number, number]) => {
          setValue(value);
        }}
      />
      <InputGroup className="slider__input-group">
        <InputNumber
          className="slider__input-left"
          min={minValue}
          max={maxValue}
          value={value[0]}
          onChange={() => (nextValue: number) => {
            const [end] = value;
            if (nextValue > end) {
              return;
            }
            setValue([nextValue, end]);
          }}
        />
        <InputNumber
          className="slider__input-right"
          min={minValue}
          max={maxValue}
          value={value[1]}
          onChange={() => (nextValue: number) => {
            const [start] = value;
            if (start > nextValue) {
              return;
            }
            setValue([start, nextValue]);
          }}
        />
      </InputGroup>
    </div>
  );
};

export default RangeSliderEl;
