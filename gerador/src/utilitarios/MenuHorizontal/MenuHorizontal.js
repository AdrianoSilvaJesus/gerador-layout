import React from 'react';

import "./MenuHorizontal.css";

const MenuHorizontal = () => {
  return(
    <nav id="menu">
      <ul>
        <li><a href="#inicio">inicio</a></li>
        <li><a href="#quem-somos">Quem somos</a></li>
        <li><a href="#redes-sociais">Redes Sociais</a></li>
        <li><a href="#fotos">Fotos</a></li>
      </ul>
    </nav>
  );
};

export default MenuHorizontal;
