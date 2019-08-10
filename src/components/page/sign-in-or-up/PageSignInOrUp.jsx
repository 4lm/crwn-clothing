import React from 'react';

import './PageSignInOrUp.scss';

import SignIn from 'components/sign-in/SignIn';
import SignUp from 'components/sign-up/SignUp';

const PageSignInOrUp = () => (
  <div className="sign-in-or-up">
    <SignIn />
    <SignUp />
  </div>
);

export default PageSignInOrUp;
