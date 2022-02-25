import React from 'react';
import { Routes, Route, unstable_HistoryRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({history, onSignIn}) => {

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Routes>
          <Route path="/auth/signin" element={<Signin onSignIn={onSignIn}/>} />
          <Route path="/auth/signup" element={<SignUp onSignIn={onSignIn}/>} />
        </Routes>
      </Router>
    </StylesProvider>
  )
}
