/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-use-before-define */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Protected from './Protected';
import Public from './Public';

// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
/// /////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    );
}

const netlifyAuth = {
    isAuthenticated: false,
    user: null,
    authenticate(callback) {
        this.isAuthenticated = true;
        netlifyIdentity.open();
        netlifyIdentity.on(`login`, user => {
            this.user = user;
            callback(user);
        });
    },
    signout(callback) {
        this.isAuthenticated = false;
        netlifyIdentity.logout();
        netlifyIdentity.on(`logout`, () => {
            this.user = null;
            callback();
        });
    },
};

const AuthButton = withRouter(({ history }) =>
    netlifyAuth.isAuthenticated ? (
        <p>
            Welcome!{` `}
            <button
                onClick={() => {
                    netlifyAuth.signout(() => history.push(`/`));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                netlifyAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: `/login`,
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

class Login extends React.Component {
    state = { redirectToReferrer: false };

    login = () => {
        netlifyAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: `/` } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}
export default AuthExample;
