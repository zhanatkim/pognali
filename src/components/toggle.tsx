import React, {InputHTMLAttributes, ReactNode} from 'react';


export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'checkbox' | 'radio',
  name: string,
  value: string,
  children: ReactNode,
  isChecked: boolean,
  className?: string,
  appearance?: 'icon' | 'label'
  sizeLabel?: '--small' | ''
}

const Toggle: React.FC<ToggleProps> = (
  {
    type,
    name,
    value,
    children,
    appearance = 'icon',
    className,
    isChecked,
    sizeLabel = '',
    ...props
  },
  onChange) => (
  <div className={`toggle toggle--${appearance} ${className}`}>
    <label>
      <input type={type} value={value} name={name} checked={isChecked} onChange={onChange} {...props} />
      <span className={`toggle__${appearance}${sizeLabel}`}>
        {children}
      </span>
    </label>
  </div>
);

export default Toggle;
