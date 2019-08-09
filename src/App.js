import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from 'components/header/Header';
import PageHome from 'components/page/home/Home';
import PageShop from 'components/page/shop/Shop';
import PageSignInOrUp from 'components/page/sign-in-or-up/SignInOrUp';

import { auth, createUserProfileDocument } from 'firebase/utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state),
          );
        });
      } else {
        this.setState({ currentUser: userAuth }, () => console.log(this.state));
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/shop" component={PageShop} />
          <Route path="/sign-in" component={PageSignInOrUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
