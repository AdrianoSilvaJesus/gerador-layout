import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Botao from './utilitarios/Botao/Botao';

import Layout1 from './layouts/Layout1/Layout1';
import Layout2 from './layouts/Layout2/Layout2';
import Layout3 from './layouts/Layout3/Layout3';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Inicio} exact/>
        <Route path="/layout1" component={Layout1} exact/>
        <Route path="/layout2" component={Layout2} exact/>
        <Route path="/layout3" component={Layout3} exact/>
      </Switch>
    </Router>
  );
};

const Inicio = () => {
  return(
    <div className="App">
      <div className="botoes">
        <Botao texto="Layout 1" to={'/layout1'}/>
        <Botao texto="Layout 2" to={'/layout2'}/>
        <Botao texto="Layout 3" to={'/layout3'}/>
      </div>
    </div>
  );
};

export default App;
