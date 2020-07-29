import './src/styles/index.scss'
import React from 'react'
import { navigate } from 'gatsby'
import { AuthProvider } from 'react-use-auth'

export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="besu.auth0.com"
        auth0_client_id="YxUv8lOYnco2DOV6NJI19uHollHwnfMu"
    >
        {element}
    </AuthProvider>
);
  <AuthProvider
    navigate={navigate}
    auth0_domain="besu.auth0.com"
    auth0_client_id="ubgigpsqe48GdzYbsXFoKoa9xhDDvkyX"
  >
    {element}
  </AuthProvider>
)