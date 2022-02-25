import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route,  useRoutes } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});


// todo: refactor to use outlet for MarketingApp maybe?
export default () => {
  const [isSignedIn, setIsSignedState] = useState(false);
  const App = () => {
    return useRoutes([
      {
        path: '/auth/*',
        element: <AuthLazy onSignIn={() => setIsSignedState(true)}/>
      },
      {
        path: '/*',
        element: <MarketingLazy/>,
      },
    ]);
  }
  return (
    <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedState(false)} />
          <Suspense fallback={<Progress/>}>
            <App />
          </Suspense>
        </BrowserRouter>
    </StylesProvider>
  );
};
