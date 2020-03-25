import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="botoes">
        <Botao texto="Layout 1"/>
        <Botao texto="Layout 2"/>
        <Botao texto="Layout 3"/>
      </div>
    </div>
  );
};

const Botao = props => {
  return(
    <button className="botao">{props.texto}</button>
  );
};

export default App;
