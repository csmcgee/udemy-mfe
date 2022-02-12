import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

// @todo: put into components directory
import Landing from './Landing';
import Pricing from './Pricing';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
