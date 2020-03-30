import React,{ useEffect } from 'react';

import "./Layout2.css";

const Layout3 = () => {
  useEffect(() => {
    document.title = "Layout 3";
  });

  return(
    <h1>Layout 3</h1>
  );
};

export default Layout3;
