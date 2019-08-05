import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from 'components/header/Header';
import PageHome from 'components/page/home/Home';
import PageShop from 'components/page/shop/Shop';
import PageSignInOrUp from 'components/page/sign-in-or-up/SignInOrUp';

import { auth } from 'firebase/utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={PageHome} />
          <Route path='/shop' component={PageShop} />
          <Route path='/sign-in' component={PageSignInOrUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
