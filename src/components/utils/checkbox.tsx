import React from 'react';

interface CheckboxProps {
  name: string,
  value: string,
  label: string,
  isChecked: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
}

const Checkbox: React.FC<CheckboxProps> = ({name, value, label, isChecked, onChange}) => (
  <label className="checkbox__label">
    <input
      className="checkbox__input visually-hidden"
      type="checkbox"
      name={name}
      value={value}
      checked={isChecked}
      onChange={onChange}
      tabIndex={-1}
    />
    <svg className="checkbox__icon" width="18" height="17" viewBox="0 0 18 17" fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.38679 14.1809L4 10.5V10V9C4 8.95907 4 9.04093 4 9C4 8.78516 4.00007 8.5 4.00007 8.5V7.5L7.37736 10.7561C7.49314 10.8776 7.68161 10.8761 7.79738 10.7547L15.0001 3V5.07271V6C15.0001 6.5 15.0001 6.5 15.0001 6.5L8.80839 13.1208L8.80974 13.1222L7.80681 14.1795C7.69103 14.3009 7.50256 14.3009 7.38679 14.1809Z"
        fill="#161C35"
      />
    </svg>
    <span className="checkbox__label-icon" tabIndex={0}></span>
    <span className="checkbox__label-text">{label}</span>
  </label>
);

export default Checkbox;
