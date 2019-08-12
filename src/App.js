import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from 'components/header/Header';
import PageHome from 'components/page/home/PageHome';
import PageShop from 'components/page/shop/PageShop';
import PageSignInOrUp from 'components/page/sign-in-or-up/PageSignInOrUp';

import { auth, createUserProfileDocument } from 'firebase/utils';
import { setCurrentUser } from 'redux/user/userActions';
import { selectCurrentUser } from 'redux/user/userSelectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/shop" component={PageShop} />
          <Route
            exact
            path="/sign-in"
            render={() => (currentUser ? <Redirect to="/" /> : <PageSignInOrUp />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
