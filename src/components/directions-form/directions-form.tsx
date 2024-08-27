import React, {ReactNode} from 'react';

import UserForm from '../form-user/user-form';

interface DirectionsProps {
  children: ReactNode,
}

const DirectionsForm: React.FC<DirectionsProps> = ({children}) =>
  (
    <div className="directions-form">
      <form>
        <UserForm className="directions-form__user-form" />
        {children}
      </form>
    </div>
  );

export default DirectionsForm;
