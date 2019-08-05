import React from 'react';

import './SignInOrUp.scss';

import SignIn from 'components/sign-in/SignIn';
import SignUp from 'components/sign-up/SignUp';

const SignInOrUp = () => (
  <div className="sign-in-or-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInOrUp;
