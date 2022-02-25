import React from 'react';
import { Routes, Route, unstable_HistoryRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// @todo: put into components directory
import Landing from './Landing';
import Pricing from './Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

// TODO: refactor routing when vus is in to redefine routing interface
// NOTE container is telling MFE that initial load is change in path to /
/// Shouldn't container dictate what MFE thinks the route is instead of browser url?
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
