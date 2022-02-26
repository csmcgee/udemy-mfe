import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter,  useRoutes, useNavigate, Navigate } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});


// todo: refactor to use outlet for MarketingApp maybe?
export default () => {
  const [isSignedIn, setIsSignedState] = useState(false);

  // todo: should we break this component out?
  const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (isSignedIn) {
        navigate('/dashboard');
      }
    }, [isSignedIn])

    return useRoutes([
      {
        path: '/auth/*',
        element: <AuthLazy onSignIn={() => setIsSignedState(true)}/>
      },
      {
        path: '/dashboard',
        element: isSignedIn ? <DashboardLazy /> : <Navigate to="/"/>,
      },
      {
        path: '/*',
        element: <MarketingLazy/>,
      },
    ]);
  };

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
