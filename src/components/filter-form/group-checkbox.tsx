import React, {useState} from 'react';
import Checkbox from '../utils/checkbox';

interface GroupCheckboxProps {
  list: {
    id: number,
    name: string,
    value: string,
    label: string,
    isChecked: boolean,
  }[],
  className: string,
}

const GroupCheckbox: React.FC<GroupCheckboxProps> = ({list, className}) => {
  const [checkedState, setCheckedState] = useState(list.map((el) => el.isChecked));

  const onInputCheck = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <ul className={`${className} checkbox`}>
      {list.map((el, index) => (
        <li className="checkbox__item" key={index}>
          <Checkbox
            key={el.id}
            name={el.name}
            value={el.value}
            label={el.label}
            isChecked={checkedState[index]}
            onChange={() => onInputCheck(index)}
          />
        </li>
      ))}
    </ul>

  );
};

export default GroupCheckbox;
