/* eslint-disable new-cap */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import React from "react";
import netlify from "netlify-auth-providers";
import { GraphQLClient } from "graphql-request";

async function authWithGitHub() {
  return new Promise((resolve, reject) => {
    const authenticator = new netlify({
      // TODO: REPLACE WITH SITE_ID
      site_id: ``,
    });
    authenticator.authenticate(
      { provider: `github`, scope: `public_repo,read:org,read:user` },
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
}

const GitHubClientContext = React.createContext();

function getClient(token) {
  const headers = { Authorization: `bearer ${token}` };
  return new GraphQLClient(`https://api.github.com/graphql`, { headers });
}

class GitHubClientProvider extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { client: null, error: null };

  componentDidMount() {
    const token = window.localStorage.getItem(`github-token`) || process.env.REACT_APP_GITHUB_TOKEN;
    if (token) {
      this.setState({ client: getClient(token) });
    }
  }

  handleSignoutClick = () => {
    window.localStorage.removeItem(`github-token`);
    this.setState({ client: null, error: null });
  };

  handleLoginClick = async () => {
    const data = await authWithGitHub().catch((error) => {
      console.log(`Oh no`, error);
      this.setState({ error });
    });
    window.localStorage.setItem(`github-token`, data.token);
    this.setState({ client: getClient(data.token) });
  };

  render() {
    const { client, error } = this.state;
    const { children } = this.props;

    return client ? (
      <GitHubClientContext.Provider value={client}>
        <button onClick={this.handleSignoutClick}>Sign Out</button>
        {children}
      </GitHubClientContext.Provider>
    ) : error ? (
      <div>
        Oh no! Error! <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    ) : (
      <div>
        You have no client!
        <button onClick={this.handleLoginClick}>Sign In Here!</button>
      </div>
    );
  }
}

const { Consumer } = GitHubClientContext;

export { GitHubClientProvider as Provider, Consumer, GitHubClientContext as Context };
