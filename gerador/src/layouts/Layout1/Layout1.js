import React,{ useEffect } from 'react';

import MenuHorizontal from '../../utilitarios/MenuHorizontal/MenuHorizontal';

import './Layout1.css';

const Layout1 = () => {
  useEffect(() => {
    document.title = "Layout 1";
  });

  return(
    <div className="layout1">
      <MenuHorizontal/>
      <main className="conteudo">
        <article>
          jjh
        </article>
      </main>
    </div>
  );
};

export default Layout1;
