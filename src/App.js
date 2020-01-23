import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from './home/Inicio'
import Categorias from './jogo/Categorias'
import Perguntas from './jogo/Perguntas'
import Resultado from './jogo/Resultado'
import Raking from './jogo/Raking'
import Header from './jogo/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Route path='/' exact component={Inicio} />
        <Route path='/Categorias' component={Categorias}/>
        <Route path='/Perguntas/:nome' component={Perguntas} />
        <Route path='/Resultado' component={Resultado}/>
        <Route path='/Ranking' component={Raking}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
