import React, { useEffect } from 'react';

import { useAuth } from 'react-use-auth';

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);

  // eslint-disable-next-line react/jsx-filename-extension
  return <div />;
};

export default Auth0CallbackPage;
