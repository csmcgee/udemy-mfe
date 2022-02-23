import React from 'react';
import { Routes, Route, unstable_HistoryRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// @todo: put into components directory
import Landing from './Landing';
import Pricing from './Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({history}) => {

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Routes>
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </Router>
    </StylesProvider>
  )
}
