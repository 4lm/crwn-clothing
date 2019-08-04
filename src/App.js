import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from 'components/header/Header';
import PageHome from 'components/page/home/Home';
import PageShop from 'components/page/shop/Shop';
import PageSignInOrUp from 'components/page/sign-in-or-up/SignInOrUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={PageHome} />
        <Route path='/shop' component={PageShop} />
        <Route path='/sign-in' component={PageSignInOrUp} />
      </Switch>
    </div>
  );
}

export default App;
