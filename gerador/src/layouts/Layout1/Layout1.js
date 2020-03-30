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
        <article id="inicio" className="secao">

        </article>
        <article id="quem-somos" className="secao">

        </article>
        <article id="redes-sociais" className="secao">

        </article>
        <article id="fotos" className="secao">

        </article>
      </main>
    </div>
  );
};

export default Layout1;
