import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useNavigate, useLocation, useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();


  const { render, onParentNavigate } = mount({
    // when navigation occurs, this callback sent to mfe allows mfe
    // to make container navigate
    onNavigate: ({_, location: { pathname: nextPathName }}) => {
      if (location.pathname !== nextPathName) {
        console.log("we have to navigate to", nextPathName);
        navigate(nextPathName);
      }
    },
  });

  useEffect(() => {
    render(ref.current);
  }, []);

  useEffect(() => {
    // when location changes, use this callback to let mfe know that we need it
    // to update in memory history
    onParentNavigate(location)
  }, [location]);

  return <div ref={ref} />;
};
