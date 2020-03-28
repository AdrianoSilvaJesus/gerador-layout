import React from 'react';
import { Link } from 'react-router-dom';

import './Botao.css';

const Botao = props => {
  if(props.to){
    return(
      <button className="botao" onClick={() => console.log("Adriano")}><Link to={props.to}>{props.texto}</Link></button>
    );
  };

  return(
    <button className="botao">{props.texto}</button>
  );
};

export default Botao;
