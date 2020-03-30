import React,{ useEffect } from 'react';

import './Layout1.css';

const Layout1 = () => {
  useEffect(() => {
    document.title = "Layout 1";
  });

  return(
    <h1>Layout 1</h1>
  );
};

export default Layout1;
