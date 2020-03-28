import React from 'react';

import Botao from './utilitarios/Botao/Botao';

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

export default App;
