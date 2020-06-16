import React, { useEffect } from "react";
 
import { useAuth } from "react-use-auth";
 
const Auth0CallbackPage = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication();
    });
 
    return (
      <h1 style={{width: '100%', textAlign: 'center', marginTop: '200px'}}>
          Redirecting...
      </h1>
    );
};
 
export default Auth0CallbackPage;