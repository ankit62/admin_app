import React from 'react';
import AppRouter from './AppRouter';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});

const App: React.FC = () => {
  return (
    <AuthProvider store={store}>
          <AppRouter />
    </AuthProvider>
  );
};

export default App;
