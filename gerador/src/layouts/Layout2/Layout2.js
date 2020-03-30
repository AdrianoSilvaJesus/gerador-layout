import React,{ useEffect } from 'react';

const Layout2 = () => {
  useEffect(() => {
    document.title = "Layout 2";
  });

  return(
    <h1>Layout 2</h1>
  );
};

export default Layout2;
