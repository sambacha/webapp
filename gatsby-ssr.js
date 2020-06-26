import './src/styles/index.scss';
import React from "react";
import { navigate } from "gatsby";
import { AuthProvider } from "react-use-auth";
 
export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="dev-h90rou6g.us.auth0.com"
        auth0_client_id="JfCmHd1mC2C1log4YwSsjwdfclI7sThV"
    >
        {element}
    </AuthProvider>
);