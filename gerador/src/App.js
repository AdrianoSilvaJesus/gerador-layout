import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Botao from './utilitarios/Botao/Botao';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
};

const Inicio = () => {
  return(
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
