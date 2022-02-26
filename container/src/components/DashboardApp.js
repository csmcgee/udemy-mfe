import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  const { render } = mount();

  useEffect(() => {
    render(ref.current);
  }, []);

  return <div ref={ref} />;
};
